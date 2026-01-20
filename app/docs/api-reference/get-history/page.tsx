import CodeBlock from '@/app/components/CodeBlock';

export default function GetHistoryPage() {
  return (
    <div className="prose prose-invert max-w-none">
      <div className="mb-6 flex items-center gap-2">
        <span className="rounded bg-green-600 px-2 py-1 text-xs font-semibold text-white">
          GET
        </span>
        <code className="text-lg">
          /api/v1/public/threads/&#123;thread_id&#125;/history
        </code>
      </div>

      <h1 className="mb-4 text-4xl font-bold">Get Conversation History</h1>
      <p className="text-lg text-gray-400">
        Retrieve the complete conversation history for a thread. This includes
        all messages exchanged between you and the AI agent.
      </p>

      <h2 className="mt-8 text-2xl font-semibold">Request</h2>
      <CodeBlock endpoint="get-history" />

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
                <code>thread_id</code>
              </td>
              <td className="px-4 py-3 text-sm">string (required)</td>
              <td className="px-4 py-3 text-sm">The thread ID</td>
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
                <code>page</code>
              </td>
              <td className="px-4 py-3 text-sm">integer (optional)</td>
              <td className="px-4 py-3 text-sm">Page number (default: 1)</td>
            </tr>
            <tr>
              <td className="px-4 py-3 text-sm">
                <code>page_size</code>
              </td>
              <td className="px-4 py-3 text-sm">integer (optional)</td>
              <td className="px-4 py-3 text-sm">
                Messages per page (1-1000, default: 100)
              </td>
            </tr>
            <tr>
              <td className="px-4 py-3 text-sm">
                <code>include_file_content</code>
              </td>
              <td className="px-4 py-3 text-sm">boolean (optional)</td>
              <td className="px-4 py-3 text-sm">
                Include file content (default: false)
              </td>
            </tr>
            <tr>
              <td className="px-4 py-3 text-sm">
                <code>include_status_messages</code>
              </td>
              <td className="px-4 py-3 text-sm">boolean (optional)</td>
              <td className="px-4 py-3 text-sm">
                Include status messages (default: false)
              </td>
            </tr>
            <tr>
              <td className="px-4 py-3 text-sm">
                <code>compact</code>
              </td>
              <td className="px-4 py-3 text-sm">boolean (optional)</td>
              <td className="px-4 py-3 text-sm">
                Return minimal fields (default: false)
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="mt-8 text-2xl font-semibold">Response</h2>
      <CodeBlock
        language="json"
        code={`{
  "success": true,
  "thread_id": "thread_456",
  "messages": [
    {
      "message_id": "msg_1",
      "role": "user",
      "content": "Create a website",
      "created_at": "2024-01-01T10:00:00Z"
    },
    {
      "message_id": "msg_2",
      "role": "assistant",
      "content": "Here is your website...",
      "created_at": "2024-01-01T10:00:30Z",
      "has_code": true,
      "has_files": true
    }
  ],
  "pagination": {
    "current_page": 1,
    "total_pages": 1,
    "has_next": false
  }
}`}
      />
    </div>
  );
}

