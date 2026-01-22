import CodeBlock from '@/app/components/CodeBlock';

export default function RateLimitsPage() {
  return (
    <div className="prose prose-invert max-w-none">
      <h1 className="mb-4 text-4xl font-bold">Rate Limits</h1>
      <p className="text-lg text-gray-400">
        Rate limits help ensure fair usage and system stability. Different
        pricing tiers have different limits.
      </p>

      <h2 className="mt-8 text-2xl font-semibold">Rate Limit Tiers</h2>
      <div className="overflow-x-auto mt-4 rounded-md border border-zinc-800 bg-zinc-900/50 backdrop-blur-sm">
        <table className="min-w-full">
          <thead className="bg-zinc-800/80">
            <tr>
              <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-200 border-b border-zinc-700">
                Tier
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-200 border-b border-zinc-700">
                Requests/Hour
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-700/50">
            <tr className="hover:bg-zinc-800/30 transition-colors">
              <td className="px-6 py-4 text-sm font-medium text-gray-200">Free</td>
              <td className="px-6 py-4 text-sm text-gray-300">100</td>
            </tr>
            <tr className="hover:bg-zinc-800/30 transition-colors">
              <td className="px-6 py-4 text-sm font-medium text-gray-200">Pro</td>
              <td className="px-6 py-4 text-sm text-gray-300">10,000</td>
            </tr>
            <tr className="hover:bg-zinc-800/30 transition-colors">
              <td className="px-6 py-4 text-sm font-medium text-gray-200">Enterprise</td>
              <td className="px-6 py-4 text-sm text-gray-300">Custom</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="mt-8 text-2xl font-semibold">Rate Limit Headers</h2>
      <p>
        Every API response includes rate limit information in the headers:
      </p>

      <CodeBlock
        language="text"
        code={`X-RateLimit-Limit: 10000
X-RateLimit-Remaining: 9995
X-RateLimit-Reset: 1640995200`}
      />

      <ul className="list-disc space-y-2 pl-6">
        <li>
          <code>X-RateLimit-Limit</code>: Maximum number of requests allowed per
          hour
        </li>
        <li>
          <code>X-RateLimit-Remaining</code>: Number of requests remaining in
          the current window
        </li>
        <li>
          <code>X-RateLimit-Reset</code>: Unix timestamp when the rate limit
          resets
        </li>
      </ul>

      <h2 className="mt-8 text-2xl font-semibold">Handling Rate Limits</h2>
      <p>
        When you receive a 429 status code, implement exponential backoff:
      </p>

      <CodeBlock
        language="python"
        code={`import time
import requests

def make_request_with_retry(url, headers, max_retries=3):
    for attempt in range(max_retries):
        response = requests.get(url, headers=headers)
        
        if response.status_code == 429:
            reset_time = int(response.headers.get('X-RateLimit-Reset', 0))
            wait_time = max(60, reset_time - time.time())
            print(f"Rate limited. Waiting {wait_time}s...")
            time.sleep(wait_time)
            continue
            
        return response
    
    raise Exception("Max retries exceeded")`}
      />

      <div className="my-6 rounded-lg border border-yellow-200 bg-yellow-50 p-4 dark:border-yellow-800 dark:bg-yellow-900/20">
        <p className="mb-0 text-sm text-yellow-900 dark:text-yellow-200">
          <strong>Tip:</strong> Monitor your rate limit usage and upgrade your
          plan if you consistently hit limits. Enterprise customers can request
          custom limits.
        </p>
      </div>
    </div>
  );
}

