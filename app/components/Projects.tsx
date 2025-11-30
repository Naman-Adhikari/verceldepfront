export default function Projects() {
  return (
    <section id="projects" className="py-32 text-center bg-white">
      <h2 className="text-3xl font-bold mb-12 text-[#b7e5eb]">Projects</h2>
      <div className="flex justify-center flex-wrap gap-8">
        <div className="card w-64 h-40 bg-gray-100 flex items-center justify-center rounded-lg shadow">
          Project 1
        </div>
        <div className="card w-64 h-40 bg-gray-100 flex items-center justify-center rounded-lg shadow">
          Project 2
        </div>
        <div className="card w-64 h-40 bg-gray-100 flex items-center justify-center rounded-lg shadow">
          Project 3
        </div>
      </div>
    </section>
  );
}
