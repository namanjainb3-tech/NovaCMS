import Card from "../../../ui/Card";

export default function AboutTab() {
  return (
    <div className="space-y-8">

      <div>
        <h2 className="text-2xl font-semibold text-white">
          About
        </h2>

        <p className="mt-2 text-sm text-zinc-400">
          Information about your CMS installation.
        </p>
      </div>

      <Card className="p-6">

        <div className="divide-y divide-zinc-800">

          <div className="flex items-center justify-between py-4">
            <span className="text-zinc-400">CMS Version</span>
            <span className="font-medium text-white">
              v1.0.0
            </span>
          </div>

          <div className="flex items-center justify-between py-4">
            <span className="text-zinc-400">Frontend</span>
            <span className="font-medium text-white">
              React + Vite
            </span>
          </div>

          <div className="flex items-center justify-between py-4">
            <span className="text-zinc-400">Backend</span>
            <span className="font-medium text-white">
              Express.js
            </span>
          </div>

          <div className="flex items-center justify-between py-4">
            <span className="text-zinc-400">Database</span>
            <span className="font-medium text-white">
              MongoDB Atlas
            </span>
          </div>

          <div className="flex items-center justify-between py-4">
            <span className="text-zinc-400">Authentication</span>
            <span className="font-medium text-white">
              JWT
            </span>
          </div>

          <div className="flex items-center justify-between py-4">
            <span className="text-zinc-400">Developer</span>
            <span className="font-medium text-white">
              Naman Jain
            </span>
          </div>

        </div>

      </Card>

    </div>
  );
}