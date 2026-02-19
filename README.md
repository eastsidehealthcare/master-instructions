# Master Instructions Repository

Central repository for SEO, UI, and workflow guidelines used across all eastsidehealthcare websites.

## Purpose

This repository serves as the single source of truth for:
- **SEO Guidelines** - Standard SEO practices for all marketing websites
- **UI Guidelines** - User interface design best practices  
- **Workflow Guidelines** - Development and deployment processes
- **Template Documentation** - 11ty template usage and customization

## Usage

All projects should reference these guidelines rather than maintaining local copies:

```markdown
# In your project README or docs:

## Development Guidelines

Refer to the master instructions repository for:
- [SEO Guidelines](https://github.com/eastsidehealthcare/master-instructions/blob/main/docs/SEO-GUIDELINES.md)
- [UI Guidelines](https://github.com/eastsidehealthcare/master-instructions/blob/main/docs/UI-GUIDELINES.md)  
- [Workflow Guidelines](https://github.com/eastsidehealthcare/master-instructions/blob/main/docs/MASTER-WORKFLOW.md)
```

## Website

This repository is also a website built with 11ty. Visit the live site for formatted guidelines:

**Production URL:** [https://master-instructions.d2q2suquhut472.amplifyapp.com](https://master-instructions.d2q2suquhut472.amplifyapp.com)

## Structure

```
master-instructions/
├── docs/                    # Raw markdown guidelines
│   ├── SEO-GUIDELINES.md
│   ├── UI-GUIDELINES.md
│   └── MASTER-WORKFLOW.md
├── src/                    # 11ty website source
│   ├── guide/             # Web pages for each guideline
│   └── _includes/         # Layouts and partials
└── _site/                 # Built static site
```

## Contributing

1. Edit markdown files in `docs/`
2. The 11ty site automatically builds web pages from these files
3. Submit a pull request
4. Changes will be deployed to the live website automatically

## Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## Deployment

This site is deployed automatically via AWS Amplify:
- Push to `main` branch → automatic production deployment
- Pull requests → preview deployments

## Related Repositories

- [made-with-claw](https://github.com/eastsidehealthcare/made-with-claw) - 11ty template repository
- [seattle-nurse-delegation](https://github.com/eastsidehealthcare/seattle-nurse-delegation) - Example implementation
- [seattle-assisted-living-network](https://github.com/eastsidehealthcare/seattle-assisted-living-network) - Example implementation

## License

MIT