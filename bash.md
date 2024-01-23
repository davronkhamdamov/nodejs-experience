# Bash tutorial

1.  Basic Script Structure:
    Create a new file with a .sh extension, for example, myscript.sh. Open it with a text editor (like nano, vim, or gedit).

    -   Comment

        ```bash
        #!/bin/bash

        # This is a comment

        echo "Hello, World!"
        ```

    -   Make it executable:

        ```bash
        #!/bin/bash
        chmod +x myscript.sh
        ```

    -   Run the script:

        ```bash
          #!/bin/bash
          ./myscript.sh
        ```

2.  Variables:

    ```bash
      #!/bin/bash
      name="John"
      echo "Hello, $name!"
    ```

3.  Input from User:

    ```bash
        #!/bin/bash
        echo "Enter your name:"
        read name
        echo "Hello, $name!"
    ```

4.  Conditionals:

    ```bash
      #!/bin/bash
      echo "Enter your age:"
      read age
      if [ $age -ge 18 ]; then
        echo "You are an adult."
      else
        echo "You are a minor."
      fi
    ```

5.  Loops:

    -   For Loop:

        ```bash
        #!/bin/bash
        for i in {1..5}; do
          echo "Iteration $i"
        done
        ```

    -   While Loop:

        ```bash
          #!/bin/bash
          counter=1
          while [ $counter -le 5 ]; do
            echo "Iteration $counter"
            ((counter++))
          done
        ```

6.  Functions:

    ```bash
    #!/bin/bash
    greet() {
      echo "Hello, $1!"
    }
    greet "Alice"
    greet "Bob"
    ```

7.  Command-Line Arguments:

    ```bash
    #!/bin/bash
    echo "Script name: $0"
    echo "First argument: $1"
    echo "Second argument: $2"
    ```

8.  File Operations:

    ```bash
    #!/bin/bash
    filename="example.txt"

    # Check if file exists

    if [ -e $filename ]; then
    echo "$filename exists."
    else
      echo "$filename does not exist."
    fi

    # Read file line by line

    while IFS= read -r line; do
    echo "Line: $line"
    done < "$filename"
    ```

9.  Exit Status:
    Every command in Bash returns an exit status, typically 0 for success and non-zero for failure. You can use this in scripts.

    ```bash
    #!/bin/bash
    ls /nonexistent-directory
    if [ $? -ne 0 ]; then
    echo "Error: Directory not found."
    fi
    ```

10. Arrays:
    ```bash
    #!/bin/bash
    fruits=("Apple" "Orange" "Banana")
      echo "First fruit: ${fruits[0]}"
      echo "All fruits: ${fruits[@]}"
    ```
11. String Manipulation:
    ```bash
    #!/bin/bash
    text="Hello, World!"
    echo "Length of text: ${#text}"
    echo "Substring: ${text:0:5}"
    ```
12. Case Statements:

    ```bash
    #!/bin/bash
    echo "Enter a fruit:"
    read fruit

    case $fruit in
      "Apple")
        echo "Selected fruit is Apple."
      ;;
      "Orange" | "Mango")
        echo "Selected fruit is Orange or Mango."
      ;;
      \*)
        echo "Unknown fruit."
      ;;
    esac

    ```

13. Math Operations:
    ```bash
    #!/bin/bash
    num1=10
    num2=5
    sum=$((num1 + num2))
    echo "Sum: $sum"
    ```
14. File Permissions:
    ```bash
    #!/bin/bash
    filename="example.txt"
    chmod +x $filename # Make the file executable
    ```
15. Environment Variables:
    ```bash
    #!/bin/bash
    echo "Home directory: $HOME"
    echo "User: $USER"
    ```
16. Redirecting Output:
    ```bash
    #!/bin/bash
    echo "This is a message" > output.txt
    echo "This is another message" >> output.txt # Append to the file
    ```
17. Pipelines:

    ```bash
    #!/bin/bash
    echo "List of files in /bin:"
    ls /bin | grep "sh"
    ```

18. Functions with Return Values:

    ```bash
    #!/bin/bash
    add() {
    result=$(( $1 + $2 ))
      return $result
    }

    add 3 5
    echo "Sum: $?"
    ```

19. Reading from a File:
    ```bash
    #!/bin/bash
    while IFS= read -r line; do
      echo "Line: $line"
    done < input.txt
    ```
20. Checking if a Command Exists:

    ```bash
    #!/bin/bash
    command="ls"
    if command -v $command &> /dev/null; then
      echo "$command exists."
    else
      echo "$command does not exist."
    fi
    ```

    21. Making Scripts Portable:
        Use `#!/usr/bin/env` bash as the shebang line instead of `#!/bin/bash`. This helps in making the script more portable.

21. Error Handling:
    Use the trap command to handle errors or signals gracefully.

    ```bash
    #!/bin/bash
    trap 'echo "Error occurred"; exit 1' ERR
    ```

22. Creating Temporary Files:

    ```bash
    #!/bin/bash
    tempfile=$(mktemp)
    echo "This is temporary" > $tempfile

    # Use $tempfile...

    rm $tempfile
    ```

23. Debugging:
    Add `set -x` at the beginning of the script to enable debugging. It prints each command and its arguments to the standard error output.

24. User Confirmation:
    ```bash
    #!/bin/bash
    read -p "Do you want to continue? (y/n): " answer
    if [ "$answer" == "y" ]; then
      echo "Continuing..."
    else
      echo "Exiting..."
    exit 1
    fi
    ```
25. Prompting for Password:
    ```bash
    #!/bin/bash
    echo -n "Enter your password: "
    read -s password
    echo "Password entered."
    ```
26. Running Commands in the Background:
    ```bash
    #!/bin/bash
    command &
    ```
27. Getting Current Date and Time:
    ```bash
    #!/bin/bash
    current_date=$(date +"%Y-%m-%d")
    echo "Current date: $current_date"
    ```
28. Checking if a Directory Exists:
    ```bash
    #!/bin/bash
    directory="mydir"
    if [ -d $directory ]; then
      echo "$directory exists."
    else
      echo "$directory does not exist."
    fi
    ```
29. Sleeping:

    ```bash
    #!/bin/bash
    echo "Sleeping for 3 seconds..."
    sleep 3
    echo "Awake!"
    ```

30. Checking if a File is Empty:
    ```bash
    #!/bin/bash
    file="example.txt"
    if [ -s $file ]; then
      echo "$file is not empty."
    else
      echo "$file is empty."
    fi
    ```
31. Using Wildcards (Globbing):
    ```bash
    #!/bin/bash
    for file in \*.txt; do
      echo "Processing $file"
    done
    ```
32. Checking if a String is Empty:
    ```bash
    #!/bin/bash
    str=""
    if [ -z "$str" ]; then
      echo "String is empty."
    else
      echo "String is not empty."
    fi
    ```
33. Reading Passwords Securely:
    ```bash
    #!/bin/bash
    echo -n "Enter your password: "
    read -s password
    echo -e "\nPassword entered."
    ```
34. Getting Process IDs:
    ```bash
    #!/bin/bash
    process_name="myprocess"
    pid=$(pgrep $process_name)
    echo "Process ID of $process_name: $pid"
    ```
35. Using getopts for Command-Line Options:

    ```bash
    #!/bin/bash
    while getopts ":a:b:" opt; do
      case $opt in
        a)
          arg_a="$OPTARG"
          ;;
        b)
          arg_b="$OPTARG"
          ;;
        \?)
          echo "Invalid option: -$OPTARG" >&2
          exit 1
          ;;
        :)
          echo "Option -$OPTARG requires an argument." >&2
          exit 1
          ;;
      esac
    done

    echo "Option a: $arg_a"
    echo "Option b: $arg_b"

    ```

36. Creating a Menu:

    ```bash
    #!/bin/bash
    PS3="Select an option: "
    options=("Option 1" "Option 2" "Quit")
    select opt in "${options[@]}"; do
    case $opt in
      "Option 1")
        echo "You chose Option 1."
        ;;
      "Option 2")
        echo "You chose Option 2."
        ;;
      "Quit")
        break
        ;;
      *) echo "Invalid option";;
    esac
    done
    ```

37. Appending to an Array:
    ```bash
    #!/bin/bash
    fruits=("Apple" "Orange")
    fruits+=("Banana")
      echo "All fruits: ${fruits[@]}"
    ```
38. Checking Network Connectivity:
    ```bash
    #!/bin/bash
    ping -c 1 google.com &> /dev/null
    if [ $? -eq 0 ]; then
      echo "Internet is reachable."
    else
      echo "Internet is not reachable."
    fi
    ```
39. Checking if a Command is Running:
    ```bash
    #!/bin/bash
    process_name="myprocess"
    if pgrep -x $process_name > /dev/null; then
      echo "$process\*name is running."
    else
      echo "$process_name is not running."
    fi
    ```
40. Colorizing Output:
    ```bash
    #!/bin/bash
    RED='\033[0;31m'
    NC='\033[0m' # No Color
    echo -e "${RED}This is in red.${NC}"
    ```
41. Getting External Input Safely:
    ```bash
    #!/bin/bash
    read -p "Enter a value: " -r input
    echo "You entered: $input"
    ```
42. Checking if a Command Succeeded:
    ```bash
    #!/bin/bash
    mkdir mydirectory && echo "Directory created successfully."
    ```
43. Using awk for Text Processing:
    ```bash
    #!/bin/bash
    echo "John 25" | awk '{print "Name: " $1; print "Age: " $2}'
    ```
44. Finding and Replacing in Files:
    ```bash
    #!/bin/bash
    sed -i 's/old/new/g' myfile.txt
    ```
45. Displaying Disk Usage:
    ```bash
    #!/bin/bash
    df -h
    ```
46. Checking Uptime:
    ```bash
    #!/bin/bash
    uptime
    ```
47. Running Commands Asynchronously:
    ```bash
    #!/bin/bash
    command1 &
    command2 &
    wait
    echo "Both commands have finished."
    ```
48. Appending Date to File Names:
    ```bash
    #!/bin/bash
    current_date=$(date +"%Y%m%d")
    mv myfile.txt myfile*$current_date.txt
    ```
49. Checking if a Variable is Set:
    ```bash
    #!/bin/bash
    if [ -z ${myvar+x} ]; then
      echo "myvar is not set."
    else
      echo "myvar is set to $myvar."
    fi
    ```
