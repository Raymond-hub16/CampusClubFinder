export default function About() {
  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">About Campus Club Finder</h1>
      <p className="mb-2">This is a student-focused web app that helps you discover, learn about, and join campus clubs.</p>
      <p className="mb-2">Technologies used:</p>
      <ul className="list-disc pl-5 mb-4">
        <li>React (UI & state)</li>
        <li>Vite (build tool)</li>
        <li>React Router (routing)</li>
        <li>Tailwind CSS (styling)</li>
        <li>LocalStorage (for club joining)</li>
      </ul>
    </div>
  );
}
