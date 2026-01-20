import CodeBlock from '@/app/components/CodeBlock';

export default function StopAgentPage() {
  return (
    <div className="prose prose-invert max-w-none">
      <div className="mb-6 flex items-center gap-2">
        <span className="rounded bg-blue-600 px-2 py-1 text-xs font-semibold text-white">
          POST
        </span>
        <code className="text-lg">
          /api/v1/public/threads/&#123;thread_id&#125;/agent/stop
        </code>
      </div>

      <h1 className="mb-4 text-4xl font-bold">Stop Agent</h1>
      <p className="text-lg text-gray-400">
        Stop a running task. This endpoint allows you to cancel an agent
        execution that is currently in progress.
      </p>

      <h2 className="mt-8 text-2xl font-semibold">Request</h2>
      <CodeBlock endpoint="stop-agent" />

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
              <td className="px-4 py-3 text-sm">
                The thread ID of the running task
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
          </tbody>
        </table>
      </div>

      <h2 className="mt-8 text-2xl font-semibold">Response</h2>
      <CodeBlock
        language="json"
        code={`{
  "success": true,
  "agent_run_id": "run_123",
  "status": "stopped"
}`}
      />

      <div className="my-6 rounded-lg border border-yellow-200 bg-yellow-50 p-4 dark:border-yellow-800 dark:bg-yellow-900/20">
        <p className="mb-0 text-sm text-yellow-900 dark:text-yellow-200">
          <strong>Note:</strong> Once a task is stopped, it cannot be resumed.
          You'll need to create a new task if you want to continue.
        </p>
      </div>
    </div>
  );
}

