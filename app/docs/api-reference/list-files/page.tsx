import CodeBlock from '@/app/components/CodeBlock';

export default function ListFilesPage() {
  return (
    <div className="prose prose-invert max-w-none">
      <div className="mb-6 flex items-center gap-2">
        <span className="rounded bg-[#6bdd9a] px-2 py-1 text-xs font-semibold text-black">
          GET
        </span>
        <code className="text-lg">
          /api/v1/public/threads/&#123;thread_id&#125;/files
        </code>
      </div>

      <h1 className="mb-4 text-4xl font-bold">List Thread Files</h1>
      <p className="text-lg text-gray-400">
        Get a list of all files generated in a thread. This endpoint provides
        metadata about all files created during the task execution.
      </p>

      <h2 className="mt-8 text-2xl font-semibold">Request</h2>
      <CodeBlock endpoint="list-files" />

      <h2 className="mt-8 text-2xl font-semibold">Path Parameters</h2>
      <div className="overflow-x-auto mt-4 rounded-md border border-zinc-800 bg-zinc-900/50 backdrop-blur-sm">
        <table className="min-w-full">
          <thead className="bg-zinc-800/80">
            <tr>
              <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-200 border-b border-zinc-700">
                Parameter
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-200 border-b border-zinc-700">
                Type
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-200 border-b border-zinc-700">
                Description
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-700/50">
            <tr>
              <td className="px-4 py-3 text-sm">
                <code>thread_id</code>
              </td>
              <td className="px-4 py-3 text-sm">string (required)</td>
              <td className="px-4 py-3 text-sm">The thread ID</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="mt-8 text-2xl font-semibold">Query Parameters</h2>
      <div className="overflow-x-auto mt-4 rounded-md border border-zinc-800 bg-zinc-900/50 backdrop-blur-sm">
        <table className="min-w-full">
          <thead className="bg-zinc-800/80">
            <tr>
              <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-200 border-b border-zinc-700">
                Parameter
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-200 border-b border-zinc-700">
                Type
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-200 border-b border-zinc-700">
                Description
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-700/50">
            <tr>
              <td className="px-4 py-3 text-sm">
                <code>project_id</code>
              </td>
              <td className="px-4 py-3 text-sm">string (required)</td>
              <td className="px-4 py-3 text-sm">Project ID</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="mt-8 text-2xl font-semibold">Response</h2>
      <CodeBlock
        language="json"
        showStatus={true}
        statusCode="200"
        code={`{
  "success": true,
  "files": [
    {
      "file_id": "file_1",
      "file_name": "index.html",
      "file_size": 2048,
      "file_type": "text/html"
    }
  ],
  "pagination": {
    "current_page": 1,
    "total_items": 1
  }
}`}
      />
    </div>
  );
}

