export default function TroubleshootingPage() {
  return (
    <div className="prose prose-invert max-w-none">
      <h1 className="mb-4 text-4xl font-bold">Troubleshooting</h1>
      <p className="text-lg text-gray-400">
        Common issues and their solutions. If you can't find your issue here,
        contact support at support@he2.ai.
      </p>

      <h2 className="mt-8 text-2xl font-semibold">"API Key not found" Error</h2>
      <div className="my-4 rounded-lg border border-red-200 bg-red-50 p-4 dark:border-red-800 dark:bg-red-900/20">
        <p className="mb-2 font-semibold text-red-900 dark:text-red-200">
          Problem: Getting 401 Unauthorized
        </p>
        <ul className="list-disc space-y-1 pl-6 text-sm text-red-800 dark:text-red-300">
          <li>Verify API key format: he-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</li>
          <li>Check for extra spaces or characters</li>
          <li>Ensure key hasn't been revoked</li>
          <li>Try creating a new API key</li>
        </ul>
      </div>

      <h2 className="mt-8 text-2xl font-semibold">
        "Rate limit exceeded" Error
      </h2>
      <div className="my-4 rounded-lg border border-yellow-200 bg-yellow-50 p-4 dark:border-yellow-800 dark:bg-yellow-900/20">
        <p className="mb-2 font-semibold text-yellow-900 dark:text-yellow-200">
          Problem: Getting 429 Too Many Requests
        </p>
        <ul className="list-disc space-y-1 pl-6 text-sm text-yellow-800 dark:text-yellow-300">
          <li>Check usage in dashboard</li>
          <li>Wait for reset time in X-RateLimit-Reset header</li>
          <li>Upgrade plan for higher limits</li>
          <li>Implement exponential backoff</li>
        </ul>
      </div>

      <h2 className="mt-8 text-2xl font-semibold">Tasks Taking Too Long</h2>
      <div className="my-4 rounded-lg border border-blue-200 bg-blue-50 p-4 dark:border-blue-800 dark:bg-blue-900/20">
        <p className="mb-2 font-semibold text-blue-900 dark:text-blue-200">
          Problem: Tasks running for extended periods
        </p>
        <ul className="list-disc space-y-1 pl-6 text-sm text-blue-800 dark:text-blue-300">
          <li>Check task status regularly</li>
          <li>Some tasks (videos) naturally take longer</li>
          <li>Break complex requests into smaller ones</li>
          <li>Contact support if task seems stuck</li>
        </ul>
      </div>

      <h2 className="mt-8 text-2xl font-semibold">Missing Files</h2>
      <div className="my-4 rounded-lg border border-purple-200 bg-purple-50 p-4 dark:border-purple-800 dark:bg-purple-900/20">
        <p className="mb-2 font-semibold text-purple-900 dark:text-purple-200">
          Problem: Expected files not in response
        </p>
        <ul className="list-disc space-y-1 pl-6 text-sm text-purple-800 dark:text-purple-300">
          <li>Verify task status is "completed"</li>
          <li>Check if files were actually generated</li>
          <li>Try more specific prompts</li>
          <li>Use include_file_content=true parameter</li>
        </ul>
      </div>

      <h2 className="mt-8 text-2xl font-semibold">Connection Timeouts</h2>
      <div className="my-4 rounded-lg border border-orange-200 bg-orange-50 p-4 dark:border-orange-800 dark:bg-orange-900/20">
        <p className="mb-2 font-semibold text-orange-900 dark:text-orange-200">
          Problem: Requests timing out
        </p>
        <ul className="list-disc space-y-1 pl-6 text-sm text-orange-800 dark:text-orange-300">
          <li>Increase timeout value (up to 600 seconds)</li>
          <li>Check internet connection</li>
          <li>Try during off-peak hours</li>
          <li>Break large requests into smaller ones</li>
        </ul>
      </div>

      <h2 className="mt-8 text-2xl font-semibold">Getting Help</h2>
      <p>If you're still experiencing issues:</p>
      <ul className="list-disc space-y-2 pl-6">
        <li>
          <strong>Documentation:</strong> Review the full API documentation
        </li>
        <li>
          <strong>Dashboard:</strong>{' '}
          <a
            href="https://he2.ai/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline dark:text-blue-400"
          >
            https://he2.ai/
          </a>
        </li>
        <li>
          <strong>Support:</strong>{' '}
          <a
            href="mailto:support@he2.ai"
            className="text-blue-600 hover:underline dark:text-blue-400"
          >
            support@he2.ai
          </a>
        </li>
        <li>
          <strong>Status:</strong> Check for service incidents
        </li>
      </ul>
    </div>
  );
}

