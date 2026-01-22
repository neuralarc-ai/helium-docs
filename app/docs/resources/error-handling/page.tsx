import CodeBlock from '@/app/components/CodeBlock';

export default function ErrorHandlingPage() {
  return (
    <div className="prose prose-invert max-w-none">
      <h1 className="mb-4 text-4xl font-bold">Error Handling</h1>
      <p className="text-lg text-gray-400">
        Understanding HTTP status codes and error responses helps you build
        robust applications.
      </p>

      <h2 className="mt-8 text-2xl font-semibold">HTTP Status Codes</h2>
      <div className="overflow-x-auto mt-4 rounded-md border border-zinc-800 bg-zinc-900/50 backdrop-blur-sm">
        <table className="min-w-full">
          <thead className="bg-zinc-800/80">
            <tr>
              <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-200 border-b border-zinc-700">
                Code
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-200 border-b border-zinc-700">
                Meaning
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-200 border-b border-zinc-700">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-700/50">
            <tr className="hover:bg-zinc-800/30 transition-colors">
              <td className="px-6 py-4 text-sm font-mono text-green-400">200</td>
              <td className="px-6 py-4 text-sm text-gray-200">Success</td>
              <td className="px-6 py-4 text-sm text-gray-300">Process response</td>
            </tr>
            <tr className="hover:bg-zinc-800/30 transition-colors">
              <td className="px-6 py-4 text-sm font-mono text-red-400">400</td>
              <td className="px-6 py-4 text-sm text-gray-200">Bad Request</td>
              <td className="px-6 py-4 text-sm text-gray-300">Check parameters</td>
            </tr>
            <tr className="hover:bg-zinc-800/30 transition-colors">
              <td className="px-6 py-4 text-sm font-mono text-red-400">401</td>
              <td className="px-6 py-4 text-sm text-gray-200">Unauthorized</td>
              <td className="px-6 py-4 text-sm text-gray-300">Verify API key</td>
            </tr>
            <tr className="hover:bg-zinc-800/30 transition-colors">
              <td className="px-6 py-4 text-sm font-mono text-orange-400">402</td>
              <td className="px-6 py-4 text-sm text-gray-200">Payment Required</td>
              <td className="px-6 py-4 text-sm text-gray-300">Check billing/credits</td>
            </tr>
            <tr className="hover:bg-zinc-800/30 transition-colors">
              <td className="px-6 py-4 text-sm font-mono text-red-400">404</td>
              <td className="px-6 py-4 text-sm text-gray-200">Not Found</td>
              <td className="px-6 py-4 text-sm text-gray-300">Check IDs</td>
            </tr>
            <tr className="hover:bg-zinc-800/30 transition-colors">
              <td className="px-6 py-4 text-sm font-mono text-red-400">422</td>
              <td className="px-6 py-4 text-sm text-gray-200">Validation Error</td>
              <td className="px-6 py-4 text-sm text-gray-300">Fix input format</td>
            </tr>
            <tr className="hover:bg-zinc-800/30 transition-colors">
              <td className="px-6 py-4 text-sm font-mono text-yellow-400">429</td>
              <td className="px-6 py-4 text-sm text-gray-200">Rate Limited</td>
              <td className="px-6 py-4 text-sm text-gray-300">Wait and retry</td>
            </tr>
            <tr className="hover:bg-zinc-800/30 transition-colors">
              <td className="px-6 py-4 text-sm font-mono text-red-500">500</td>
              <td className="px-6 py-4 text-sm text-gray-200">Server Error</td>
              <td className="px-6 py-4 text-sm text-gray-300">Retry later</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="mt-8 text-2xl font-semibold">Error Response Format</h2>
      <p>All error responses follow this format:</p>

      <CodeBlock
        language="json"
        showStatus={true}
        statusCode="400"
        code={`{
  "detail": "Error message describing the issue"
}`}
      />

      <h2 className="mt-8 text-2xl font-semibold">Common Error Scenarios</h2>

      <h3 className="mt-6 text-xl font-semibold">401 Unauthorized</h3>
      <p>Your API key is invalid or missing:</p>
      <CodeBlock
        language="json"
        showStatus={true}
        statusCode="401"
        code={`{
  "detail": "API key not found"
}`}
      />
      <p className="mt-2">
        <strong>Solution:</strong> Verify your API key format and ensure it's
        included in the <code>X-API-Key</code> header.
      </p>

      <h3 className="mt-6 text-xl font-semibold">400 Bad Request</h3>
      <p>Invalid parameters or missing required fields:</p>
      <CodeBlock
        language="json"
        showStatus={true}
        statusCode="400"
        code={`{
  "detail": "prompt is required when no files are provided"
}`}
      />
      <p className="mt-2">
        <strong>Solution:</strong> Check the endpoint documentation and ensure
        all required parameters are provided.
      </p>

      <h3 className="mt-6 text-xl font-semibold">429 Rate Limited</h3>
      <p>You've exceeded your rate limit:</p>
      <CodeBlock
        language="json"
        showStatus={true}
        statusCode="429"
        code={`{
  "detail": "Rate limit exceeded. Please try again later."
}`}
      />
      <p className="mt-2">
        <strong>Solution:</strong> Wait for the rate limit window to reset or
        upgrade your plan. Check the <code>X-RateLimit-Reset</code> header for
        the reset time.
      </p>

      <h2 className="mt-8 text-2xl font-semibold">Best Practices</h2>
      <ul className="list-disc space-y-2 pl-6">
        <li>Always check HTTP status codes before processing responses</li>
        <li>Implement retry logic for 429 and 500 errors</li>
        <li>Log error details for debugging</li>
        <li>Display user-friendly error messages</li>
        <li>Handle network timeouts gracefully</li>
        <li>Validate inputs before sending requests</li>
      </ul>
    </div>
  );
}

