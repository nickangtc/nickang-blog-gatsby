#!/usr/bin/env python3
"""
Normalize blog post formatting before commit.
Converts smart quotes, removes invisible characters.
"""

import sys
import os
from pathlib import Path

def normalize_blog_post(file_path):
    """Normalize typography in a single blog post."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()

        original = content

        # Replace smart quotes and apostrophes
        content = content.replace('\u2018', "'")  # Left single quote
        content = content.replace('\u2019', "'")  # Right single quote
        content = content.replace('\u201C', '"')  # Left double quote
        content = content.replace('\u201D', '"')  # Right double quote
        content = content.replace('\u200B', '')   # Zero-width space
        content = content.replace('\u00A0', ' ')  # Non-breaking space

        # Only write if changed
        if content != original:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            return True
        return False
    except Exception as e:
        print(f"❌ Error normalizing {file_path}: {e}", file=sys.stderr)
        return False

def main():
    """Normalize all blog posts in the content/blog directory."""
    blog_dir = Path("content/blog")

    if not blog_dir.exists():
        return 0

    normalized_count = 0

    # Find all index.md files in blog directories
    for index_file in blog_dir.glob("*/index.md"):
        if normalize_blog_post(index_file):
            print(f"✓ Normalized: {index_file}")
            normalized_count += 1

    if normalized_count > 0:
        print(f"✓ Normalized {normalized_count} blog post(s)")

    return 0

if __name__ == "__main__":
    sys.exit(main())
