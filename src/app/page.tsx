import { ProjectList } from "@/components/ProjectList";

export default function Home() {
  return (
    <div className="p-5">
      <div className="grid md:grid-cols-3 gap-5">
        <div className="md:col-start-1 md:col-end-3 space-y-2 md:space-y-10">
          <h1 className="h-max text-maxHeading leading-none">
            Olen Reetta
            <br />
            Salmela.
          </h1>
          <p className="hyphens-auto text-normalParagraph whitespace-pre-line">
            Huippua, että olet täällä. Olen parikymppinen journalistiopiskelija
            Oulusta.
          </p>
        </div>
        <div className="space-y-5">
          <p className="uppercase text-xs text-neutral-600">PROJEKTINI</p>
          <ProjectList />
        </div>
      </div>
    </div>
  );
}
