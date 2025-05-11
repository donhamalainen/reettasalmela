/* eslint-disable @typescript-eslint/no-explicit-any */

import { useEffect, useState } from "react";

export function useSanityFetch<T = any>(query: string) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function fetchData() {
      setLoading(true);
      setError(null);
      try {
        const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
        const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
        const apiVersion =
          process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2023-05-03";
        const url = `https://${projectId}.api.sanity.io/v${apiVersion}/data/query/${dataset}?query=${encodeURIComponent(query)}`;

        const res = await fetch(url);
        if (!res.ok) throw new Error("Sanity fetch failed");
        const json = await res.json();
        if (!cancelled) setData(json.result);
      } catch (err: any) {
        if (!cancelled) setError(err);
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    fetchData();
    return () => {
      cancelled = true;
    };
  }, [query]);

  return { data, loading, error };
}
