'''import os
import subprocess

def sync_to_github():
    repo_dir = "/path/to/your/project"
    os.chdir(repo_dir)

    # Check for changes in contact.csv
    result = subprocess.run(['git', 'diff', '--quiet', 'contact.csv'], capture_output=True)

    if result.returncode != 0:  # Changes detected
        print("Changes detected in contact.csv, committing and pushing to GitHub")

        # Configure Git
        subprocess.run(['git', 'config', '--global', 'user.email', 'your-email@example.com'])
        subprocess.run(['git', 'config', '--global', 'user.name', 'Your Name'])

        # Add changes
        subprocess.run(['git', 'add', 'contact.csv'])

        # Commit changes
        subprocess.run(['git', 'commit', '-m', 'Update contact.csv with new data'])

        # Push changes to GitHub
        subprocess.run(['git', 'push', 'origin', 'main'])
    else:
        print("No changes to contact.csv")

if __name__ == "__main__":
    sync_to_github()
'''