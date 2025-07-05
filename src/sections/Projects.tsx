import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const projects = [
  {
    title: "Portfolio Website",
    description: "A personal site to showcase my projects and skills using Next.js and Tailwind CSS.",
  },
  {
    title: "Blog Platform",
    description: "A minimal blog platform with Markdown support, built with Next.js App Router.",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 max-w-5xl mx-auto">
      <h3 className="text-2xl font-semibold mb-6 text-center">Projects</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent>
              {/* add buttons or tags here */}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
