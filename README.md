# MindfulAI - Mental Health Support Platform

MindfulAI is an AI-powered mental health support platform that provides 24/7 support, personalized coping strategies, and a judgment-free space for users to express themselves.

## Features

- AI-powered chatbot for mental health support
- Therapy center locator
- Modern, responsive UI built with Material-UI
- Real-time chat interface
- Integration with Google's Generative AI

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (v18 or higher)
- npm (comes with Node.js)
- Git

## Getting Started

1. Clone the repository:

```bash
git clone https://github.com/02-ahmed/mental-ai.git
cd mental-ai
```

2. Install dependencies:

```bash
npm install
```

3. Set up environment variables:
   Create a `.env.local` file in the root directory with the following variables:

```
GOOGLE_API_KEY=your_api_key_here
```

⚠️ **IMPORTANT: Never commit your `.env.local` file or share your API keys!** ⚠️

To get your Google API key:

1. Visit the [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Sign in with your Google account
3. Create a new API key
4. Copy the key to your `.env.local` file
5. Make sure `.env.local` is in your `.gitignore` file

6. Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
mental-ai/
├── app/                # Next.js app directory
│   ├── components/    # Reusable React components
│   ├── chat/         # Chat interface
│   ├── therapy/      # Therapy centers page
│   └── page.js       # Landing page
├── public/           # Static assets
└── ...config files
```

## Contributing

We welcome contributions! While deployment access is restricted to repository owners, you can contribute to the project following these steps:

1. Fork the repository
2. Create a new branch: `git checkout -b feature/your-feature-name`
3. Make your changes
4. Run tests and ensure the code lints: `npm run lint`
5. Commit your changes: `git commit -m 'Add some feature'`
6. Push to the branch: `git push origin feature/your-feature-name`
7. Submit a pull request

You can also:

- Open issues to discuss proposed changes
- Submit bug reports or feature requests
- Provide code suggestions through discussions
- Share feedback on existing features

Note: All pull requests will be reviewed by the repository owner before being merged and deployed.

### Development Guidelines

- Follow the existing code style and conventions
- Write meaningful commit messages
- Update documentation as needed
- Test your changes thoroughly
- Use Material-UI components for consistency
- Follow React best practices and hooks guidelines

## Tech Stack

- [Next.js](https://nextjs.org/) - React framework
- [Material-UI](https://mui.com/) - UI components
- [Google Generative AI](https://ai.google.dev/) - AI chat capabilities
- [Vercel](https://vercel.com) - Deployment platform

## Environment Variables

Required environment variables:

- `GOOGLE_API_KEY`: Your Google Generative AI API key

⚠️ **Security Note:**

- Never commit `.env.local` or any other files containing API keys
- Keep your API keys private and secure
- Regularly rotate your API keys
- Use environment variables in Vercel for deployment

## Deployment

This project is deployed on Vercel. While we welcome code contributions through pull requests, deployment access is restricted to repository owners only to maintain security.

For repository owners:

1. Connect your GitHub repository to Vercel
2. Configure environment variables in Vercel dashboard:
   - Go to Project Settings > Environment Variables
   - Add your `GOOGLE_API_KEY` securely
3. Deploy from the main branch
4. Enable automatic deployments only for yourself

For contributors:

- Submit your changes through pull requests
- The repository owner will review, merge, and handle the deployment of approved changes
- This ensures secure handling of environment variables and controlled deployments

## Support

If you encounter any issues or have questions, please:

1. Check existing issues
2. Create a new issue with a detailed description

## License

[MIT License

Copyright (c) [2025] [Techloft]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.]
