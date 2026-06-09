import re
import os

def clean_file(filename):
    with open(filename, 'r', encoding='utf-8') as f:
        content = f.read()

    def replacer(match):
        block = match.group(0)
        
        # Split into lines
        lines = block.split('\n')
        if len(lines) <= 2:
            return block
            
        # Lines 1 to len-1 contain the actual content (excluding opening/closing div tags)
        code_lines = lines[1:-1]
        
        # Find common leading indentation
        indentations = [len(re.match(r'^\s*', line).group(0)) for line in code_lines if line.strip()]
        if not indentations:
            return block
        
        min_indent = min(indentations)
        
        # Strip min_indent
        new_code_lines = [line[min_indent:] if len(line) >= min_indent else line for line in code_lines]
        
        return lines[0] + '\n' + '\n'.join(new_code_lines) + '\n' + lines[-1]

    new_content = re.sub(r'<div class="cb">.*?</div>', replacer, content, flags=re.DOTALL)
    
    with open(filename, 'w', encoding='utf-8') as f:
        f.write(new_content)

topic_files = [f for f in os.listdir('.') if f.startswith('topic') and f.endswith('.html')]
for f in topic_files:
    clean_file(f)
