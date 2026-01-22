import CodeBlock from '@/app/components/CodeBlock';

export default function GetFileContentPage() {
  return (
    <div className="prose prose-invert max-w-none">
      <div className="mb-6 flex items-center gap-2">
        <span className="rounded bg-[#6bdd9a] px-2 py-1 text-xs font-semibold text-black">
          GET
        </span>
        <code className="text-lg">/api/v1/public/files/&#123;file_id&#125;</code>
      </div>

      <h1 className="mb-4 text-4xl font-bold">Get File Content</h1>
      <p className="text-lg text-gray-400">
        Download a specific file. You can retrieve either JSON metadata with
        inline content or raw file bytes.
      </p>

      <h2 className="mt-8 text-2xl font-semibold">Request</h2>
      <CodeBlock endpoint="get-file-content" />


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
                <code>file_id</code>
              </td>
              <td className="px-4 py-3 text-sm">string (required)</td>
              <td className="px-4 py-3 text-sm">
                File ID (format: thread_id:/workspace/filename)
              </td>
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
            <tr>
              <td className="px-4 py-3 text-sm">
                <code>thread_id</code>
              </td>
              <td className="px-4 py-3 text-sm">string (required)</td>
              <td className="px-4 py-3 text-sm">Thread ID</td>
            </tr>
            <tr>
              <td className="px-4 py-3 text-sm">
                <code>download</code>
              </td>
              <td className="px-4 py-3 text-sm">boolean (optional)</td>
              <td className="px-4 py-3 text-sm">
                Return raw bytes if true (default: false)
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="mt-8 text-2xl font-semibold">Response (JSON)</h2>
      <CodeBlock
        language="json"
        showStatus={true}
        statusCode="200"
        code={`{
  "success": true,
  "file": {
    "file_id": "thread_456:/workspace/index.html",
    "file_name": "index.html",
    "file_size": 2048,
    "file_type": "text/html",
    "included_inline": true,
    "content": "<!DOCTYPE html>...",
    "encoding": "utf-8"
  }
}`}
      />

      <div className="my-6 rounded-lg border border-blue-200 bg-blue-50 p-4 dark:border-blue-800 dark:bg-blue-900/20">
        <p className="mb-0 text-sm text-blue-900 dark:text-blue-200">
          <strong>Note:</strong> When <code>download=true</code>, the response
          will be the raw file content (binary or text) instead of JSON.
        </p>
      </div>
    </div>
  );
}

