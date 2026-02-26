# Master Documentation (Git Submodule)

This repository contains shared documentation files used across all eastsidehealthcare websites via Git submodules.

## Files Available
- `docs/SEO-GUIDELINES.md` - SEO best practices for all websites
- `docs/MASTER-WORKFLOW.md` - Development workflow and standards
- `docs/UI-GUIDELINES.md` - UI/design standards and patterns
- `docs/CLONE-BOT-ARMY.md` - Bot army cloning and setup instructions

## How It Works
- This is the **central repository** for shared documentation
- Website repositories include this as a **Git submodule**
- Files are stored here and referenced by all websites
- Updates are controlled (not automatic)

## Repository Structure
```
master-instructions/
├── docs/                    # Documentation files
│   ├── SEO-GUIDELINES.md
│   ├── MASTER-WORKFLOW.md
│   ├── UI-GUIDELINES.md
│   ├── CLONE-BOT-ARMY.md
│   └── MASTER-DOCS-README.md (this file)
├── src/                    # 11ty website source
└── _site/                  # Generated 11ty site
```

## Websites Using This Submodule
1. **edmonds-villa** - Edmonds Villa High Acuity AFH website
2. **seattle-nurse-delegation** - Seattle Nurse Delegation services website
3. **seattle-assisted-living-network** - SALN placement agency website

## Updating Documentation

### Making Changes
1. Edit files in this repository
2. Commit and push changes:
   ```bash
   git add docs/SEO-GUIDELINES.md  # or other files
   git commit -m "Update SEO guidelines for [specific change]"
   git push origin main
   ```

### Propagating Changes to Websites
After updating files here, website repositories need to update their submodule reference:

```bash
# In each website repository:
cd docs/master-instructions
git pull origin main
cd ../..
git add docs/master-instructions
git commit -m "Update master-instructions submodule to latest version"
git push
```

## For Website Developers

### Initial Clone (with submodules)
```bash
git clone --recurse-submodules https://github.com/eastsidehealthcare/edmonds-villa.git
```

### If Already Cloned (without submodules)
```bash
git submodule update --init --recursive
```

### Viewing Documentation
Documentation is available at: `docs/master-instructions/docs/` in each website repository.

## Versioning Policy
- **Main branch**: Always contains latest approved guidelines
- **Breaking changes**: Should be communicated before updating submodules
- **Backward compatibility**: Try to maintain where possible
- **Major updates**: Consider creating version tags if needed

## Benefits of This Approach
- **Single source of truth** - All websites use the same guidelines
- **Version controlled** - Each website pins to a specific commit
- **Controlled updates** - Update when ready, not automatically
- **Consistency** - Ensures all projects follow the same standards
- **Centralized maintenance** - Fix once, update everywhere

## Related Resources
- **GitHub**: https://github.com/eastsidehealthcare/master-instructions
- **Amplify Site**: https://main.d2m2t5nq7k7l9.amplifyapp.com/ (11ty-generated documentation site)
- **Organization**: https://github.com/eastsidehealthcare

## Contact
For questions or updates to these guidelines, contact the repository maintainers.