import CodeBlock from '@/app/components/CodeBlock';

export default function GetFileContentPage() {
  return (
    <div className="prose prose-invert max-w-none">
      <div className="mb-6 flex items-center gap-2">
        <span className="rounded bg-green-600 px-2 py-1 text-xs font-semibold text-white">
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
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 border border-gray-200 dark:divide-gray-800 dark:border-gray-800">
          <thead className="bg-gray-50 dark:bg-black">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-300">
                Parameter
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-300">
                Type
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-300">
                Description
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white dark:divide-gray-800 dark:bg-black">
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
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 border border-gray-200 dark:divide-gray-800 dark:border-gray-800">
          <thead className="bg-gray-50 dark:bg-black">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-300">
                Parameter
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-300">
                Type
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-300">
                Description
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white dark:divide-gray-800 dark:bg-black">
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

