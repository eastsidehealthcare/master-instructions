# Clone Your Bot: Building a Bot Army on AWS

Once you have a working OpenClaw instance on EC2, you can easily clone it to create multiple bots — each with their own identity, personality, and channel connections.

## Overview

The process:
1. **Create an AMI** from your working EC2 instance (snapshot of everything)
2. **Launch new instances** from that AMI
3. **Customize each clone** with new identity and tokens

Your original instance keeps running. Clones boot up ready to configure.

---

## Step 1: Create an AMI from Your Running Instance

An AMI (Amazon Machine Image) captures your entire disk — OS, OpenClaw installation, configs, everything.

### Via AWS Console

1. Go to **EC2 → Instances**
2. Select your running OpenClaw instance
3. Click **Actions → Image and templates → Create image**
4. Fill in the details:
   - **Image name:** `openclaw-base-YYYY-MM-DD` (e.g., `openclaw-base-2026-02-10`)
   - **Image description:** "OpenClaw with Node, gateway configured, ready for customization"
   - **Reboot instance:** Leave UNCHECKED (your bot keeps running, no downtime)
   - **Storage:** Keep defaults (or adjust size if needed)
5. Click **Create image**

### Via AWS CLI

```bash
aws ec2 create-image \
  --instance-id i-YOUR_INSTANCE_ID \
  --name "openclaw-base-$(date +%Y-%m-%d)" \
  --description "OpenClaw base image for bot army" \
  --no-reboot
```

### Wait for AMI to Complete

- Check progress: **EC2 → AMIs** (left sidebar)
- Status goes from `pending` → `available`
- Usually takes 5-15 minutes depending on disk size

---

## Step 2: Launch a New Instance from Your AMI

Once the AMI is available:

1. Go to **EC2 → AMIs**
2. Select your AMI
3. Click **Launch instance from AMI**
4. Configure the new instance:
   - **Name:** Give it a unique name (e.g., `openclaw-bot-2`)
   - **Instance type:** Same as original or adjust (t3.small works for most bots)
   - **Key pair:** Use existing or create new
   - **Security group:** Use same security group as original (needs ports 22, 443)
   - **Storage:** Keep defaults
5. Click **Launch instance**

### Note the New Instance's Public IP

You'll need this to SSH in and configure.

---

## Step 3: Configure the Clone

SSH into your new instance:

```bash
ssh -i your-key.pem ubuntu@NEW_INSTANCE_IP
```

### 3.1 Create a New Telegram Bot (or other channel)

1. Message [@BotFather](https://t.me/BotFather) on Telegram
2. Send `/newbot`
3. Give it a name and username
4. Copy the bot token

### 3.2 Update OpenClaw Config

Edit the config file:

```bash
nano ~/.openclaw/config.yaml
```

Update the Telegram token (or whichever channels you're using):

```yaml
telegram:
  token: "YOUR_NEW_BOT_TOKEN"
  allowlist:
    - "YOUR_TELEGRAM_USER_ID"
```

### 3.3 Give the Bot a New Identity

Edit the soul file:

```bash
nano ~/.openclaw/workspace/SOUL.md
```

Give this bot its own personality, name, and purpose.

### 3.4 Clear the Memory (Fresh Start)

```bash
# Clear previous bot's memories
rm -rf ~/.openclaw/workspace/memory/*
echo "# MEMORY.md - Long-Term Memory" > ~/.openclaw/workspace/MEMORY.md

# Optionally update other identity files
nano ~/.openclaw/workspace/USER.md
nano ~/.openclaw/workspace/IDENTITY.md
```

### 3.5 Restart the Gateway

```bash
openclaw gateway restart
```

### 3.6 Test It

Message your new bot on Telegram. It should respond with its new identity!

---

## Step 4: Repeat for More Bots

Each new bot needs:
- [ ] New EC2 instance from AMI
- [ ] New Telegram bot token (or Discord/Slack/etc.)
- [ ] Updated `config.yaml` with new token
- [ ] New `SOUL.md` identity
- [ ] Cleared memory files
- [ ] Gateway restart

---

## Tips for Managing Multiple Bots

### Naming Convention
Use consistent naming for instances and bots:
- EC2: `openclaw-claudia`, `openclaw-alfred`, `openclaw-jarvis`
- Telegram: `@ClaudiaAssistantBot`, `@AlfredButlerBot`, `@JarvisAIBot`

### Different Purposes
Each bot can specialize:
- Personal assistant bot
- Code review bot
- Customer support bot
- Home automation bot

### Cost Optimization
- Use `t3.micro` or `t3.small` for light-duty bots
- Consider spot instances for non-critical bots
- Stop instances when not in use (bots go offline but data persists)

### Shared Resources
Consider sharing:
- Same security group
- Same SSH key
- Same Claude API key (if within rate limits)

---

## Quick Reference

| Task | Command/Location |
|------|------------------|
| Create AMI | EC2 → Instances → Actions → Create image |
| Launch from AMI | EC2 → AMIs → Launch instance |
| Edit config | `~/.openclaw/config.yaml` |
| Edit identity | `~/.openclaw/workspace/SOUL.md` |
| Clear memory | `rm -rf ~/.openclaw/workspace/memory/*` |
| Restart gateway | `openclaw gateway restart` |
| Check status | `openclaw gateway status` |

---

*Now go build your army! 🤖🤖🤖*
