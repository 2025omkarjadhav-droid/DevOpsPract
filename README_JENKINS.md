# 🔧 Jenkins Pipeline — MERN Chat App

This document explains how to set up and run the **Jenkins CI/CD Pipeline** for the MERN Chat App using the provided `Jenkinsfile`.

---

## 📋 Prerequisites

Before configuring Jenkins, make sure you have:

| Requirement        | Notes                                              |
|--------------------|----------------------------------------------------|
| Jenkins Installed  | LTS version recommended                            |
| Node.js Plugin     | Install via Jenkins Plugin Manager                 |
| Git Plugin         | Usually pre-installed with Jenkins                 |
| GitHub Repository  | Project pushed to GitHub                           |
| Node.js on Jenkins | Must be accessible via `npm` and `node` commands   |

---

## 🏗️ Jenkins Pipeline Overview

The pipeline defined in `Jenkinsfile` has **4 stages**:

```
Clone Repo → Install Backend Dependencies → Run Backend → Build Success
```

### Pipeline Stages Explained

| Stage                         | What It Does                                     |
|-------------------------------|--------------------------------------------------|
| **Clone Repo**                | Checks out the latest code from Git              |
| **Install Backend Dependencies** | Runs `npm install` inside the `server/` folder |
| **Run Backend**               | Starts the Node.js backend server in background  |
| **Build Success**             | Confirms the pipeline completed successfully     |

---

## 🚀 Step-by-Step: Setting Up Jenkins Pipeline

### Step 1 — Install Jenkins

**On Ubuntu/Debian:**
```bash
sudo apt update
sudo apt install openjdk-17-jdk -y
wget -q -O - https://pkg.jenkins.io/debian/jenkins.io.key | sudo apt-key add -
sudo sh -c 'echo deb http://pkg.jenkins.io/debian-stable binary/ > /etc/apt/sources.list.d/jenkins.list'
sudo apt update
sudo apt install jenkins -y
sudo systemctl start jenkins
sudo systemctl enable jenkins
```

> Jenkins runs at: **http://localhost:8080**

---

### Step 2 — Unlock Jenkins

1. Open browser → go to `http://localhost:8080`
2. Run the following to get the initial admin password:
   ```bash
   sudo cat /var/lib/jenkins/secrets/initialAdminPassword
   ```
3. Paste the password in the browser and click **Continue**
4. Select **Install suggested plugins**
5. Create your admin user

---

### Step 3 — Install Required Plugins

Go to: **Dashboard → Manage Jenkins → Manage Plugins → Available**

Search and install:
- ✅ **NodeJS Plugin**
- ✅ **Git Plugin** (usually pre-installed)
- ✅ **Pipeline** (usually pre-installed)

---

### Step 4 — Configure Node.js in Jenkins

1. Go to: **Dashboard → Manage Jenkins → Global Tool Configuration**
2. Scroll to **NodeJS** section
3. Click **Add NodeJS**
4. Set:
   - **Name:** `NodeJS`
   - **Version:** Select latest LTS (e.g., NodeJS 18.x)
5. Click **Save**

---

### Step 5 — Create a New Pipeline Job

1. Go to: **Dashboard → New Item**
2. Enter a name (e.g., `MERN-Chat-Pipeline`)
3. Select **Pipeline** → Click **OK**

---

### Step 6 — Configure the Pipeline

In the **Pipeline** section:

1. Under **Definition**, select: **Pipeline script from SCM**
2. **SCM:** Select `Git`
3. **Repository URL:** Enter your GitHub repo URL, e.g.:
   ```
   https://github.com/YOUR_USERNAME/DevOps_Practicalexam.git
   ```
4. **Branch Specifier:** `*/main` (or `*/master`)
5. **Script Path:** `Jenkinsfile`
6. Click **Save**

---

### Step 7 — Run the Pipeline

1. Go to your pipeline job
2. Click **Build Now** in the left sidebar
3. Click the build number (e.g., `#1`) → Click **Console Output** to see live logs

---

## 📊 Pipeline Execution — Console Output

A successful run will show:

```
[Pipeline] Start of Pipeline
[Pipeline] stage: Clone Repo
Cloning repository...
Checking out from Git: https://github.com/YOUR_USERNAME/DevOps_Practicalexam.git
[Pipeline] stage: Install Backend Dependencies
Installing backend dependencies...
[server] npm install
added 120 packages in 8s
[Pipeline] stage: Run Backend
Starting backend server...
[server] node server.js &
Server running on port 5000
[Pipeline] stage: Build Success
Build Success!
Finished: SUCCESS
```

---

## 📄 Jenkinsfile Reference

```groovy
pipeline {
    agent any

    stages {
        stage('Clone Repo') {
            steps {
                echo 'Cloning repository...'
                checkout scm
            }
        }

        stage('Install Backend Dependencies') {
            steps {
                echo 'Installing backend dependencies...'
                dir('server') {
                    sh 'npm install'
                }
            }
        }

        stage('Run Backend') {
            steps {
                echo 'Starting backend server...'
                dir('server') {
                    sh 'node server.js &'
                }
            }
        }

        stage('Build Success') {
            steps {
                echo 'Build Success!'
            }
        }
    }
}
```

---

## ❌ Common Errors & Fixes

| Error                              | Cause                                      | Fix                                                          |
|------------------------------------|--------------------------------------------|--------------------------------------------------------------|
| `npm: command not found`           | Node.js not configured in Jenkins          | Configure NodeJS in Global Tool Configuration                |
| `Permission denied`                | Jenkins user lacks file permissions        | Run `chmod +x` or fix Jenkins user permissions               |
| `Cannot connect to GitHub`         | Jenkins can't reach GitHub                 | Check internet access or add GitHub credentials              |
| `No Jenkinsfile found`             | Script path wrong                          | Ensure `Jenkinsfile` is at root and path is set correctly    |
| `node server.js &` hangs pipeline  | Background process blocks Jenkins          | Use `nohup node server.js &` or manage via Docker            |

---

## 🔄 Optional: Trigger Pipeline on Git Push (Webhook)

### On GitHub:
1. Go to your repo → **Settings → Webhooks → Add webhook**
2. **Payload URL:** `http://YOUR_JENKINS_IP:8080/github-webhook/`
3. **Content type:** `application/json`
4. **Trigger:** `Just the push event`
5. Click **Add webhook**

### On Jenkins:
1. Open your pipeline job → **Configure**
2. Under **Build Triggers**, check: ✅ **GitHub hook trigger for GITScm polling**
3. Click **Save**

> Now every `git push` will automatically trigger the Jenkins pipeline! 🚀

---

## 🔗 Related Files

```
DevOps_Practicalexam/
├── Jenkinsfile             ← Pipeline definition
├── server/
│   ├── server.js           ← Backend entry point (started in pipeline)
│   └── package.json        ← Backend dependencies (npm install)
└── README_JENKINS.md       ← This file
```

---

## 🔗 Related Documentation

- [Jenkins Official Docs](https://www.jenkins.io/doc/)
- [Jenkins Pipeline Syntax](https://www.jenkins.io/doc/book/pipeline/syntax/)
- [NodeJS Jenkins Plugin](https://plugins.jenkins.io/nodejs/)
- [GitHub Webhooks Guide](https://docs.github.com/en/developers/webhooks-and-events/webhooks)
