'use client';

import { useState } from 'react';
import CodeBlock from '@/app/components/CodeBlock';

type Language = 'python' | 'javascript' | 'react' | 'react-native';

export default function CodeExamplesPage() {
  const [activeTab, setActiveTab] = useState<Language>('python');

  const tabs: { id: Language; label: string }[] = [
    { id: 'python', label: 'Python' },
    { id: 'javascript', label: 'JavaScript/Node.js' },
    { id: 'react', label: 'React' },
    { id: 'react-native', label: 'React Native' },
  ];

  return (
    <div className="prose prose-invert max-w-none">
      <h1 className="mb-4 text-4xl font-bold">Code Examples</h1>
      <p className="text-lg text-gray-400">
        Complete code examples for integrating the Helium Public API into your
        applications. Choose your preferred language or framework.
      </p>

      {/* Language Tabs */}
      <div className="my-8 border-b border-gray-200 dark:border-gray-800">
        <nav className="-mb-px flex space-x-8" aria-label="Tabs">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`whitespace-nowrap border-b-2 px-1 py-4 text-sm font-medium transition-colors ${
                activeTab === tab.id
                  ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                  : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>

      {/* Python Example */}
      {activeTab === 'python' && (
        <div>
          <CodeBlock
            language="python"
            code={`import requests
import time

class HeliumAPI:
    def __init__(self, api_key):
        self.api_key = api_key
        self.base_url = "https://api.he2.ai"
        self.headers = {
            "X-API-Key": api_key
        }
    
    def create_task(self, prompt):
        """Create and start a new task"""
        response = requests.post(
            f"{self.base_url}/api/v1/public/quick-action",
            data={"prompt": prompt},
            headers=self.headers
        )
        response.raise_for_status()
        return response.json()
    
    def get_results(self, thread_id, project_id, timeout=300):
        """Get task results"""
        response = requests.get(
            f"{self.base_url}/api/v1/public/threads/{thread_id}/response",
            params={"project_id": project_id, "timeout": timeout},
            headers=self.headers
        )
        response.raise_for_status()
        return response.json()
    
    def create_website(self, description):
        """Complete workflow: create and get results"""
        # Create task
        task = self.create_task(description)
        print(f"Task created: {task['thread_id']}")
        
        # Get results
        results = self.get_results(task['thread_id'], task['project_id'])
        
        if results['status'] == 'completed':
            print("✅ Task completed!")
            return results
        else:
            print(f"Status: {results['status']}")
            return results

# Usage
api = HeliumAPI("he-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx")
results = api.create_website("Build a modern blog website")`}
          />
        </div>
      )}

      {/* JavaScript Example */}
      {activeTab === 'javascript' && (
        <div>
          <CodeBlock
            language="javascript"
            code={`const fetch = require('node-fetch');

class HeliumAPI {
    constructor(apiKey) {
        this.apiKey = apiKey;
        this.baseUrl = 'https://api.he2.ai';
        this.headers = {
            'X-API-Key': apiKey
        };
    }
    
    async createTask(prompt) {
        const formData = new FormData();
        formData.append('prompt', prompt);
        
        const response = await fetch(\`\${this.baseUrl}/api/v1/public/quick-action\`, {
            method: 'POST',
            headers: this.headers,
            body: formData
        });
        
        if (!response.ok) {
            throw new Error(\`API Error: \${response.status}\`);
        }
        
        return await response.json();
    }
    
    async getResults(threadId, projectId, timeout = 300) {
        const url = new URL(\`\${this.baseUrl}/api/v1/public/threads/\${threadId}/response\`);
        url.searchParams.set('project_id', projectId);
        url.searchParams.set('timeout', timeout);
        
        const response = await fetch(url, {
            method: 'GET',
            headers: this.headers
        });
        
        if (!response.ok) {
            throw new Error(\`API Error: \${response.status}\`);
        }
        
        return await response.json();
    }
    
    async createWebsite(description) {
        console.log(\`Creating: \${description}\`);
        
        // Create task
        const task = await this.createTask(description);
        console.log(\`Task started: \${task.thread_id}\`);
        
        // Get results
        const results = await this.getResults(task.thread_id, task.project_id);
        
        if (results.status === 'completed') {
            console.log('✅ Task completed!');
            return results;
        } else {
            console.log(\`Status: \${results.status}\`);
            return results;
        }
    }
}

// Usage
const api = new HeliumAPI('he-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx');
api.createWebsite('Create a restaurant website with online reservations')
    .then(results => console.log('Success!', results))
    .catch(error => console.error('Error:', error));`}
          />
        </div>
      )}

      {/* React Example */}
      {activeTab === 'react' && (
        <div>
          <CodeBlock
            language="jsx"
            code={`import React, { useState } from 'react';

function HeliumWidget() {
    const [prompt, setPrompt] = useState('');
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState(null);
    
    const API_KEY = 'he-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx';
    const BASE_URL = 'https://api.he2.ai';
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!prompt.trim()) return;
        
        setLoading(true);
        
        try {
            // Create task
            const formData = new FormData();
            formData.append('prompt', prompt);
            formData.append('source', 'web_widget');
            
            const taskResponse = await fetch(\`\${BASE_URL}/api/v1/public/quick-action\`, {
                method: 'POST',
                headers: {
                    'X-API-Key': API_KEY
                },
                body: formData
            });
            
            const taskData = await taskResponse.json();
            
            // Get results
            const resultsResponse = await fetch(
                \`\${BASE_URL}/api/v1/public/threads/\${taskData.thread_id}/response?project_id=\${taskData.project_id}&timeout=300\`,
                { headers: { 'X-API-Key': API_KEY } }
            );
            
            const resultsData = await resultsResponse.json();
            setResult(resultsData);
            
        } catch (err) {
            console.error('Error:', err);
        } finally {
            setLoading(false);
        }
    };
    
    return (
        <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
            <h2>Helium AI Builder</h2>
            
            <form onSubmit={handleSubmit}>
                <textarea
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    placeholder="Describe what you want to build..."
                    rows={4}
                    style={{ width: '100%', padding: '10px' }}
                    disabled={loading}
                />
                
                <button
                    type="submit"
                    disabled={loading || !prompt.trim()}
                >
                    {loading ? 'Building...' : 'Build It!'}
                </button>
            </form>
            
            {result && result.status === 'completed' && (
                <div style={{ marginTop: '20px' }}>
                    <h3>✅ Project Created!</h3>
                    <p>Files: {result.files?.length || 0}</p>
                </div>
            )}
        </div>
    );
}

export default HeliumWidget;`}
          />
        </div>
      )}

      {/* React Native Example */}
      {activeTab === 'react-native' && (
        <div>
          <CodeBlock
            language="jsx"
            code={`import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Alert } from 'react-native';

const HeliumMobileApp = () => {
    const [prompt, setPrompt] = useState('');
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState(null);
    
    const API_KEY = 'he-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx';
    const BASE_URL = 'https://api.he2.ai';
    
    const createProject = async () => {
        if (!prompt.trim()) {
            Alert.alert('Error', 'Please describe what you want to build');
            return;
        }
        
        setLoading(true);
        
        try {
            // Create task
            const formData = new FormData();
            formData.append('prompt', prompt);
            formData.append('source', 'mobile_app');
            formData.append('metadata', JSON.stringify({ platform: 'ios' }));
            
            const taskResponse = await fetch(\`\${BASE_URL}/api/v1/public/quick-action\`, {
                method: 'POST',
                headers: {
                    'X-API-Key': API_KEY
                },
                body: formData
            });
            
            const taskData = await taskResponse.json();
            
            // Get results
            const resultsResponse = await fetch(
                \`\${BASE_URL}/api/v1/public/threads/\${taskData.thread_id}/response?project_id=\${taskData.project_id}&timeout=300\`,
                { headers: { 'X-API-Key': API_KEY } }
            );
            
            const resultsData = await resultsResponse.json();
            
            if (resultsData.status === 'completed') {
                setResult(resultsData);
                Alert.alert('Success!', \`Created \${resultsData.files?.length || 0} files\`);
            }
            
        } catch (error) {
            Alert.alert('Error', error.message);
        } finally {
            setLoading(false);
        }
    };
    
    return (
        <ScrollView style={{ flex: 1, padding: 20 }}>
            <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 20 }}>
                Helium AI Builder
            </Text>
            
            <TextInput
                style={{
                    borderWidth: 1,
                    borderColor: '#ccc',
                    borderRadius: 8,
                    padding: 12,
                    marginBottom: 16,
                    height: 100
                }}
                placeholder="What do you want to build?"
                value={prompt}
                onChangeText={setPrompt}
                multiline
                editable={!loading}
            />
            
            <TouchableOpacity
                style={{
                    backgroundColor: loading ? '#ccc' : '#007bff',
                    padding: 16,
                    borderRadius: 8,
                    alignItems: 'center'
                }}
                onPress={createProject}
                disabled={loading}
            >
                <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>
                    {loading ? 'Building...' : 'Build It!'}
                </Text>
            </TouchableOpacity>
            
            {result && (
                <View style={{ marginTop: 20 }}>
                    <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
                        Project Created! 🎉
                    </Text>
                    <Text>Files: {result.files?.length || 0}</Text>
                </View>
            )}
        </ScrollView>
    );
};

export default HeliumMobileApp;`}
          />
        </div>
      )}
    </div>
  );
}

