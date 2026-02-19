# Master Workflow Guidelines

Standard development and deployment processes for all eastsidehealthcare websites.

---

## Development Workflow

### Branch Strategy
- **Always work from a branch** - never push directly to `main`
- **Branch naming:** `feature-description` or `fix-issue-description`
- **Examples:** `update-service-areas-favicon`, `fix-mobile-menu-bug`

### Pull Request Process
1. **Create PR** with descriptive title and detailed description
2. **Include Amplify preview link** in PR description
   - Format: `https://pr-<number>.<app-id>.amplifyapp.com`
   - Example: `https://pr-25.d2q2suquhut472.amplifyapp.com`
3. **Wait for Amplify build** to complete
4. **Take screenshots** of preview (automated via screenshot system)
5. **Notify stakeholders** only when preview link is ready
6. **Merge after approval** - don't wait for extra confirmation

### Communication Guidelines
- **Concise updates** - what changed, why, result
- **Visual evidence** - screenshots with preview links
- **Proactive** - suggest next steps, don't just wait
- **Timely** - merge quickly after approval (minutes, not hours)

---

## Screenshot Workflow (NEW: 2026-02-19)

### Automated Screenshot System
- **Purpose:** Take screenshots of Amplify preview links automatically
- **Technology:** Headless Chrome + puppeteer-core (uses existing Chrome installation)
- **No local browser connection** required - runs on server
- **Integration:** Built into standard PR workflow

### Files
1. `/take_screenshot.js` - Core screenshot function
2. `/screenshot_workflow.js` - Complete workflow (screenshot + Telegram integration)

### Usage
```javascript
// After Amplify preview is ready:
const previewUrl = "https://pr-XX.app-id.amplifyapp.com";
await screenshotAndSend(previewUrl, "PR #XX - Description");
// Screenshot automatically sent to Telegram
```

### Technical Details
- Uses `/usr/bin/google-chrome` (already installed)
- Uses `puppeteer-core` (already in node_modules)
- Headless mode: `headless: 'new'`
- Default viewport: 1280x720
- Wait time: 3 seconds for page to settle
- Output: PNG files in `/tmp/`

---

## Deployment Workflow

### Amplify Deployment
- **Automatic builds** on push to `main` branch
- **PR previews** enabled for all pull requests
- **Production URL:** `https://main.<app-id>.amplifyapp.com`
- **Preview URL:** `https://pr-<number>.<app-id>.amplifyapp.com`

### Post-Deployment Verification
1. **Check production site** after merge
2. **Verify changes** are live
3. **Note cache clearing** for favicon changes
4. **Update documentation** if needed

### Deployment Timeline Example
```
8:37 AM: PR created with changes
8:41 AM: PR #25 merged (squash merge)
8:44 AM: Amplify build completed
8:45 AM: Changes live on production
```

---

## Tool Selection Principles

### Prefer Existing Infrastructure
- **Use what's already installed** (Chrome, Node.js, etc.)
- **puppeteer-core over full Puppeteer** (uses existing Chrome)
- **Simple solutions** over complex setups (Node script vs Lambda)

### Technology Stack
- **SSG:** 11ty (Eleventy)
- **Hosting:** AWS Amplify
- **Domain Registration:** AWS Route 53 preferred
- **DNS:** AWS Route 53
- **SSL:** AWS Amplify (auto-provisioned)
- **Template Repo:** `eastsidehealthcare/made-with-claw`

### GitHub Organization
- **Org:** `eastsidehealthcare`
- **Master template:** `made-with-claw` (public)
- **Project repos:** Clone from template for each new site

---

## Documentation Workflow

### Centralized Documentation
- **Master repository:** `master-instructions` (this repo)
- **Single source of truth** for all guidelines
- **All projects reference** master docs, don't maintain local copies

### Documentation Structure
```
master-instructions/
├── docs/                    # Raw markdown guidelines
│   ├── SEO-GUIDELINES.md
│   ├── UI-GUIDELINES.md
│   └── MASTER-WORKFLOW.md   (this file)
├── src/                    # 11ty website source
│   ├── guide/             # Web pages for each guideline
│   └── _includes/         # Layouts and partials
```

### Project Documentation
In each project README or docs:
```markdown
## Development Guidelines

Refer to the master instructions repository for:
- [SEO Guidelines](https://github.com/eastsidehealthcare/master-instructions/blob/main/docs/SEO-GUIDELINES.md)
- [UI Guidelines](https://github.com/eastsidehealthcare/master-instructions/blob/main/docs/UI-GUIDELINES.md)  
- [Workflow Guidelines](https://github.com/eastsidehealthcare/master-instructions/blob/main/docs/MASTER-WORKFLOW.md)
```

---

## Key Workflow Principles Learned (2026-02-19)

### 1. Communication Efficiency
- **"Only notify when preview link is ready"** - Don't message about PR creation until preview is live
- **"Show me, don't just tell me"** - Screenshots > descriptions
- **"Fast iteration"** - Quick merges, immediate verification

### 2. Technical Pragmatism
- **"Use what's already working"** - Leverage existing infrastructure
- **"Simple solutions"** - Prefer straightforward approaches
- **"Automate repetitive tasks"** - Screenshots, deployments, etc.

### 3. Quality Assurance
- **"Don't reinterpret my branding"** - Use actual logo files
- **"Healthcare terminology matters"** - "Service Areas" not "Locations"
- **"Test before notifying"** - Verify preview works before sharing

### 4. Process Optimization
- **Batch similar tasks** - Group related changes in single PR
- **Clear acceptance criteria** - Know when work is complete
- **Continuous improvement** - Update workflows based on learnings

---

## Quick Reference Checklist

### Before Creating PR
- [ ] Changes tested locally
- [ ] Branch created from `main`
- [ ] Descriptive commit messages
- [ ] Documentation updated if needed

### PR Creation
- [ ] Descriptive title and description
- [ ] Amplify preview link included
- [ ] Screenshots taken (automated)
- [ ] Stakeholders notified (only when preview ready)

### After Merge
- [ ] Production site verified
- [ ] Cache clearing noted (if favicon changes)
- [ ] Documentation updated
- [ ] Next steps identified

### Weekly Maintenance
- [ ] Review open issues
- [ ] Check site analytics
- [ ] Update dependencies
- [ ] Backup critical data

---

## Troubleshooting

### Common Issues

#### Amplify Build Fails
- Check build logs in Amplify console
- Verify Node.js version compatibility
- Check for missing dependencies

#### Preview Link Not Working
- Wait for build to complete (2-5 minutes)
- Check PR number matches preview URL
- Verify Amplify app ID is correct

#### Screenshot System Issues
- Verify Chrome is installed: `/usr/bin/google-chrome`
- Check puppeteer-core is in node_modules
- Ensure sufficient disk space in `/tmp/`

#### Deployment Issues
- Check Route 53 DNS settings
- Verify SSL certificate is valid
- Test from different locations/networks

### Escalation Path
1. Check logs and error messages
2. Search for similar issues in documentation
3. Test with simpler example
4. Document issue for future reference
5. Request assistance if unresolved after 30 minutes

---

## Continuous Improvement

### Feedback Loop
1. **Track issues** - Document problems as they occur
2. **Analyze patterns** - Look for recurring issues
3. **Update guidelines** - Incorporate learnings into documentation
4. **Train team** - Share updated processes
5. **Measure results** - Track improvement over time

### Metrics to Monitor
- **Deployment frequency** - How often are changes deployed?
- **Lead time** - How long from idea to production?
- **Failure rate** - What percentage of deployments fail?
- **Recovery time** - How long to fix failed deployments?
- **Satisfaction** - Stakeholder feedback on process

### Regular Reviews
- **Weekly:** Quick process check
- **Monthly:** Detailed workflow review
- **Quarterly:** Major process overhaul if needed
- **Annually:** Complete workflow assessment

---

*Last updated: 2026-02-19*  
*Incorporating today's learnings about PR workflow, screenshot automation, and communication preferences*