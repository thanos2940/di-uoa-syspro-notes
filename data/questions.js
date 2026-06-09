window.quizData = {
    "topic1": {
        "arch": {
            "title": "Architecture",
            "questions": [
                {
                    "q": "Τι είναι ο kernel και ποιος ο ρόλος του;",
                    "options": [
                        {
                            "text": "Το κεντρικό τμήμα του λειτουργικού που διαχειρίζεται το υλικό και παρέχει υπηρεσίες.",
                            "correct": true,
                            "explanation": "Ο πυρήνας (kernel) έχει άμεση πρόσβαση στο hardware και προσφέρει syscalls στις εφαρμογές."
                        },
                        {
                            "text": "Ένα πρόγραμμα χρήστη (user space) που ελέγχει το γραφικό περιβάλλον.",
                            "correct": false,
                            "explanation": "Το γραφικό περιβάλλον τρέχει στο user space, ενώ ο kernel στο kernel space."
                        },
                        {
                            "text": "Ο μεταγλωττιστής που μεταφράζει τον κώδικα C σε γλώσσα μηχανής.",
                            "correct": false,
                            "explanation": "Αυτή είναι η δουλειά του compiler (όπως ο gcc), που είναι απλό πρόγραμμα χρήστη."
                        }
                    ]
                },
                {
                    "q": "Τι είναι τα system calls;",
                    "options": [
                        {
                            "text": "Η διεπαφή (interface) μεταξύ των προγραμμάτων χρήστη και του kernel.",
                            "correct": true,
                            "explanation": "Επιτρέπουν στα προγράμματα να ζητούν υπηρεσίες (π.χ. I/O) από τον προστατευμένο πυρήνα."
                        },
                        {
                            "text": "Εντολές του τερματικού, όπως ls και grep.",
                            "correct": false,
                            "explanation": "Αυτές είναι εκτελέσιμα προγράμματα (commands), τα οποία εσωτερικά χρησιμοποιούν system calls."
                        },
                        {
                            "text": "Συναρτήσεις της βιβλιοθήκης της C, όπως η printf().",
                            "correct": false,
                            "explanation": "Η printf() είναι library call, η οποία στο εσωτερικό της καλεί το system call write()."
                        }
                    ]
                },
                {
                    "q": "Ποια η διαφορά μεταξύ User Space και Kernel Space;",
                    "options": [
                        {
                            "text": "Στο Kernel Space ο κώδικας έχει πλήρη πρόσβαση στο hardware, ενώ στο User Space τα δικαιώματα είναι περιορισμένα.",
                            "correct": true,
                            "explanation": "Αυτός ο διαχωρισμός παρέχει ασφάλεια, εμποδίζοντας τα προγράμματα να καταρρεύσουν όλο το σύστημα."
                        },
                        {
                            "text": "Το Kernel Space βρίσκεται στον σκληρό δίσκο, ενώ το User Space στη μνήμη RAM.",
                            "correct": false,
                            "explanation": "Και τα δύο αποτελούν τμήματα της κύριας μνήμης (RAM), απλά με διαφορετικά επίπεδα προστασίας."
                        },
                        {
                            "text": "Το Kernel Space είναι για τον διαχειριστή (root), ενώ το User Space για τους απλούς χρήστες.",
                            "correct": false,
                            "explanation": "Ακόμα και τα προγράμματα του root τρέχουν στο User Space. Ο διαχωρισμός αφορά τον κώδικα (kernel vs apps)."
                        }
                    ]
                },
                {
                    "q": "Τι περιλαμβάνουν τα sections 1, 2 και 3 των man pages;",
                    "options": [
                        {
                            "text": "Section 1: Εντολές, Section 2: System calls, Section 3: Library calls.",
                            "correct": true,
                            "explanation": "Αυτή είναι η βασική δομή των εγχειριδίων στο Unix (π.χ. `man 2 open`)."
                        },
                        {
                            "text": "Section 1: System calls, Section 2: Αρχεία ρυθμίσεων, Section 3: Παιχνίδια.",
                            "correct": false,
                            "explanation": "Τα system calls ανήκουν στο Section 2 και τα αρχεία ρυθμίσεων στο Section 5, όχι στα 1 και 2."
                        },
                        {
                            "text": "Section 1: Library calls, Section 2: Δίκτυο, Section 3: System calls.",
                            "correct": false,
                            "explanation": "Τα library calls ανήκουν στο Section 3 και τα system calls στο Section 2."
                        }
                    ]
                },
                {
                    "q": "Ποια είναι η βασική φιλοσοφία του Unix;",
                    "options": [
                        {
                            "text": "\"Do one thing and do it well\" — μικρά εργαλεία συνδυάζονται μέσω pipes.",
                            "correct": true,
                            "explanation": "Κάθε πρόγραμμα κάνει μια απλή δουλειά σωστά, και σύνθετες εργασίες γίνονται με pipelines."
                        },
                        {
                            "text": "Η δημιουργία ενός τεράστιου, μονολιθικού προγράμματος που τα κάνει όλα.",
                            "correct": false,
                            "explanation": "Αυτό είναι το άκρως αντίθετο της φιλοσοφίας του Unix."
                        },
                        {
                            "text": "Κάθε πρόγραμμα πρέπει να έχει δικό του γραφικό περιβάλλον (GUI).",
                            "correct": false,
                            "explanation": "Η έμφαση του Unix είναι στο text processing μέσω της γραμμής εντολών (CLI)."
                        }
                    ]
                }
            ]
        },
        "fs": {
            "title": "Filesystem & Inodes",
            "questions": [
                {
                    "q": "Ποια η διαφορά absolute και relative path;",
                    "options": [
                        {
                            "text": "Το absolute ξεκινά από τη ρίζα (/) και ισχύει πάντα, ενώ το relative ξεκινά από τον τρέχοντα κατάλογο.",
                            "correct": true,
                            "explanation": "Π.χ. το /home/user είναι absolute, ενώ το dir/file είναι relative."
                        },
                        {
                            "text": "Το absolute μπορεί να χρησιμοποιηθεί μόνο από τον root, ενώ το relative από όλους.",
                            "correct": false,
                            "explanation": "Και τα δύο paths μπορούν να χρησιμοποιηθούν από όλους, ανεξαρτήτως δικαιωμάτων."
                        },
                        {
                            "text": "Το relative path δεν μπορεί να περιέχει καταλόγους (μόνο αρχεία).",
                            "correct": false,
                            "explanation": "Ένα relative path μπορεί να έχει πολλούς καταλόγους (π.χ. a/b/c/file)."
                        }
                    ]
                },
                {
                    "q": "Τι περιέχουν συνήθως οι κατάλογοι /etc, /tmp και /dev;",
                    "options": [
                        {
                            "text": "/etc: αρχεία ρυθμίσεων, /tmp: προσωρινά αρχεία, /dev: αρχεία συσκευών.",
                            "correct": true,
                            "explanation": "Αυτή είναι η στάνταρ ιεραρχία του συστήματος αρχείων (FHS) του Linux."
                        },
                        {
                            "text": "/etc: εκτελέσιμα, /tmp: ρυθμίσεις, /dev: logs.",
                            "correct": false,
                            "explanation": "Τα εκτελέσιμα είναι στο /bin ή /usr/bin, τα logs στο /var/log."
                        },
                        {
                            "text": "/etc: προσωρινά αρχεία, /tmp: αρχεία συσκευών, /dev: ρυθμίσεις.",
                            "correct": false,
                            "explanation": "Λάθος αντιστοίχιση των καταλόγων."
                        }
                    ]
                }
            ]
        },
        "nav": {
            "title": "Navigation",
            "questions": [
                {
                    "q": "Τι κάνει η εντολή `mkdir -p a/b/c`;",
                    "options": [
                        {
                            "text": "Δημιουργεί όλη τη διαδρομή των καταλόγων αν δεν υπάρχουν ήδη.",
                            "correct": true,
                            "explanation": "Το flag -p (parents) αποτρέπει και το error αν ο κατάλογος υπάρχει ήδη."
                        },
                        {
                            "text": "Διαγράφει τους καταλόγους a, b, και c.",
                            "correct": false,
                            "explanation": "Για διαγραφή χρησιμοποιείται η rmdir ή rm -r."
                        },
                        {
                            "text": "Αλλάζει τα δικαιώματα (permissions) των καταλόγων.",
                            "correct": false,
                            "explanation": "Για την αλλαγή δικαιωμάτων χρησιμοποιείται η chmod."
                        }
                    ]
                },
                {
                    "q": "Τι σημαίνει η τελεία (.) και οι δύο τελείες (..) σε ένα path;",
                    "options": [
                        {
                            "text": "Η τελεία (.) αναφέρεται στον τρέχοντα κατάλογο, οι δύο (..) στον γονικό.",
                            "correct": true,
                            "explanation": "Αυτά είναι ειδικά directory entries που υπάρχουν σε κάθε κατάλογο."
                        },
                        {
                            "text": "Η τελεία (.) είναι κρυφό αρχείο, οι δύο (..) είναι backup αρχείο.",
                            "correct": false,
                            "explanation": "Αν και τα αρχεία που ξεκινούν με τελεία είναι κρυφά, σκέτα το . και το .. αναφέρονται σε καταλόγους."
                        },
                        {
                            "text": "Και τα δύο οδηγούν στον ριζικό κατάλογο (/).",
                            "correct": false,
                            "explanation": "Μόνο το / οδηγεί στον ριζικό κατάλογο."
                        }
                    ]
                },
                {
                    "q": "Τι προσφέρει το flag -h στην εντολή `ls -lh`;",
                    "options": [
                        {
                            "text": "Εμφανίζει τα μεγέθη των αρχείων σε human-readable μορφή (π.χ. KB, MB).",
                            "correct": true,
                            "explanation": "Διευκολύνει την ανάγνωση σε σχέση με την προβολή των μεγεθών σε σκέτα bytes."
                        },
                        {
                            "text": "Εμφανίζει τα κρυφά (hidden) αρχεία.",
                            "correct": false,
                            "explanation": "Για την εμφάνιση κρυφών αρχείων χρησιμοποιείται το flag -a (all)."
                        },
                        {
                            "text": "Εμφανίζει ιστορικό (history) τροποποιήσεων.",
                            "correct": false,
                            "explanation": "Δεν υπάρχει flag -h για ιστορικό στο ls."
                        }
                    ]
                },
                {
                    "q": "Πώς επιστρέφουμε γρήγορα στον προηγούμενο κατάλογο που βρισκόμασταν;",
                    "options": [
                        {
                            "text": "Με την εντολή `cd -`",
                            "correct": true,
                            "explanation": "Το `cd -` διαβάζει τη μεταβλητή περιβάλλοντος $OLDPWD και επιστρέφει εκεί."
                        },
                        {
                            "text": "Με την εντολή `cd ..`",
                            "correct": false,
                            "explanation": "Αυτό πηγαίνει στον γονικό κατάλογο, όχι στον προηγούμενο."
                        },
                        {
                            "text": "Με την εντολή `cd ~`",
                            "correct": false,
                            "explanation": "Αυτό πηγαίνει στο home directory του χρήστη."
                        }
                    ]
                },
                {
                    "q": "Γιατί η εντολή `cp -r` είναι απαραίτητη για καταλόγους;",
                    "options": [
                        {
                            "text": "Το -r (recursive) επιτρέπει την αντιγραφή του καταλόγου και όλων των περιεχομένων του.",
                            "correct": true,
                            "explanation": "Χωρίς το -r, η cp αγνοεί τους καταλόγους και πετάει σφάλμα."
                        },
                        {
                            "text": "Το -r αφαιρεί (removes) το αρχικό αρχείο μετά την αντιγραφή.",
                            "correct": false,
                            "explanation": "Αυτό το κάνει η εντολή mv, όχι η cp -r."
                        },
                        {
                            "text": "Αντικαθιστά (replaces) το αρχείο αν υπάρχει ήδη.",
                            "correct": false,
                            "explanation": "Η cp αντικαθιστά εξ ορισμού αν δεν δοθεί το flag -i (interactive)."
                        }
                    ]
                }
            ]
        },
        "text": {
            "title": "Text Processing",
            "questions": [
                {
                    "q": "Πώς βρίσκουμε τη λέξη \"pattern\" σε ένα αρχείο;",
                    "options": [
                        {
                            "text": "Με την εντολή `grep \"pattern\" filename`",
                            "correct": true,
                            "explanation": "Το grep τυπώνει τις γραμμές που ταιριάζουν με το μοτίβο (regular expression)."
                        },
                        {
                            "text": "Με την εντολή `find \"pattern\" filename`",
                            "correct": false,
                            "explanation": "Η find χρησιμοποιείται για αναζήτηση αρχείων στο filesystem, όχι κειμένου μέσα σε αρχεία."
                        },
                        {
                            "text": "Με την εντολή `locate \"pattern\"`",
                            "correct": false,
                            "explanation": "Η locate ψάχνει αρχεία με βάση μια προϋπάρχουσα βάση δεδομένων ονομάτων."
                        }
                    ]
                },
                {
                    "q": "Τι κάνει η εντολή `sort -n`;",
                    "options": [
                        {
                            "text": "Ταξινομεί την είσοδο αριθμητικά (numeric).",
                            "correct": true,
                            "explanation": "Χωρίς το -n, το '10' θα θεωρούνταν μικρότερο από το '2' λόγω αλφαβητικής ταξινόμησης."
                        },
                        {
                            "text": "Αντιστρέφει τη σειρά των γραμμών.",
                            "correct": false,
                            "explanation": "Αυτό γίνεται με το flag -r (reverse)."
                        },
                        {
                            "text": "Διαγράφει τις διπλές γραμμές.",
                            "correct": false,
                            "explanation": "Αυτό γίνεται με το flag -u (unique) ή με την εντολή uniq."
                        }
                    ]
                },
                {
                    "q": "Πώς βλέπουμε μόνο τις πρώτες 5 γραμμές ενός αρχείου;",
                    "options": [
                        {
                            "text": "Με την εντολή `head -n 5 filename`",
                            "correct": true,
                            "explanation": "Η head διαβάζει από την αρχή του αρχείου. Από default δείχνει 10 γραμμές."
                        },
                        {
                            "text": "Με την εντολή `tail -n 5 filename`",
                            "correct": false,
                            "explanation": "Η tail δείχνει τις τελευταίες (όχι τις πρώτες) γραμμές του αρχείου."
                        },
                        {
                            "text": "Με την εντολή `less 5 filename`",
                            "correct": false,
                            "explanation": "Το less είναι pager, δεν φιλτράρει αριθμό γραμμών με αυτό τον τρόπο."
                        }
                    ]
                },
                {
                    "q": "Τι κάνει η εντολή `tail -f log.txt`;",
                    "options": [
                        {
                            "text": "Παρακολουθεί (follow) το αρχείο σε πραγματικό χρόνο, τυπώνοντας νέες γραμμές.",
                            "correct": true,
                            "explanation": "Πολύ χρήσιμο για την παρακολούθηση logs την ώρα που γράφονται από κάποιο πρόγραμμα."
                        },
                        {
                            "text": "Αναζητά με force τη λέξη-κλειδί στο τέλος του αρχείου.",
                            "correct": false,
                            "explanation": "Δεν υπάρχει τέτοια λειτουργία στην tail."
                        },
                        {
                            "text": "Τυπώνει γρήγορα (fast) το αρχείο παρακάμπτοντας την cache.",
                            "correct": false,
                            "explanation": "Το -f σημαίνει follow, όχι fast."
                        }
                    ]
                },
                {
                    "q": "Τι μετράει η εντολή `wc -l`;",
                    "options": [
                        {
                            "text": "Τον αριθμό των γραμμών (lines) στην είσοδο.",
                            "correct": true,
                            "explanation": "Η word count (wc) με το -l τυπώνει μόνο τον αριθμό των νέων γραμμών."
                        },
                        {
                            "text": "Τον αριθμό των λέξεων (words).",
                            "correct": false,
                            "explanation": "Αυτό γίνεται με το flag -w."
                        },
                        {
                            "text": "Τον αριθμό των χαρακτήρων (letters/bytes).",
                            "correct": false,
                            "explanation": "Αυτό γίνεται με το flag -c (bytes) ή -m (characters)."
                        }
                    ]
                }
            ]
        },
        "perm": {
            "title": "Permissions",
            "questions": [
                {
                    "q": "Τι σημαίνει το 755 σε οκταδική μορφή;",
                    "options": [
                        {
                            "text": "Owner: read/write/execute, Group/Others: read/execute.",
                            "correct": true,
                            "explanation": "7 = 4+2+1 (rwx), 5 = 4+1 (r-x). Συνολικά rwxr-xr-x."
                        },
                        {
                            "text": "Owner: read/write, Group/Others: read μόνο.",
                            "correct": false,
                            "explanation": "Αυτό θα ήταν το 644 (rw-r--r--)."
                        },
                        {
                            "text": "Πλήρη δικαιώματα σε όλους.",
                            "correct": false,
                            "explanation": "Αυτό θα ήταν το 777 (rwxrwxrwx)."
                        }
                    ]
                },
                {
                    "q": "Πώς αλλάζουμε τον ιδιοκτήτη ενός αρχείου;",
                    "options": [
                        {
                            "text": "Με την εντολή `chown user filename`.",
                            "correct": true,
                            "explanation": "Το chown (change owner) μπορεί να εκτελεστεί μόνο από τον root."
                        },
                        {
                            "text": "Με την εντολή `chmod user filename`.",
                            "correct": false,
                            "explanation": "Το chmod αλλάζει τα δικαιώματα (permissions), όχι τον ιδιοκτήτη."
                        },
                        {
                            "text": "Με την εντολή `chgrp user filename`.",
                            "correct": false,
                            "explanation": "Το chgrp αλλάζει το γκρουπ (group) του αρχείου, όχι τον ιδιοκτήτη."
                        }
                    ]
                },
                {
                    "q": "Ποια είναι η αριθμητική τιμή για τα δικαιώματα r, w, x;",
                    "options": [
                        {
                            "text": "r = 4, w = 2, x = 1",
                            "correct": true,
                            "explanation": "Αντιστοιχούν σε bit flags: 100(binary)=4, 010=2, 001=1."
                        },
                        {
                            "text": "r = 1, w = 2, x = 4",
                            "correct": false,
                            "explanation": "Λάθος σειρά. Το read είναι το πιο σημαντικό bit."
                        },
                        {
                            "text": "r = 3, w = 2, x = 1",
                            "correct": false,
                            "explanation": "Δεν αντιστοιχούν σε δυνάμεις του 2 (το 3 δεν είναι bit flag)."
                        }
                    ]
                },
                {
                    "q": "Τι δικαιώματα δίνει η εντολή `chmod 600 file`;",
                    "options": [
                        {
                            "text": "rw------- (μόνο ο ιδιοκτήτης διαβάζει και γράφει, κανείς άλλος).",
                            "correct": true,
                            "explanation": "6 (4+2) για τον owner, 0 για group, 0 για others."
                        },
                        {
                            "text": "r--r--r-- (όλοι διαβάζουν, κανείς δεν γράφει).",
                            "correct": false,
                            "explanation": "Αυτό είναι το 444."
                        },
                        {
                            "text": "rwx------ (μόνο ο ιδιοκτήτης κάνει read, write, execute).",
                            "correct": false,
                            "explanation": "Αυτό είναι το 700."
                        }
                    ]
                },
                {
                    "q": "Τι δικαιώματα (permissions) πρέπει να έχουμε για να διαγράψουμε ένα αρχείο από έναν κατάλογο;",
                    "options": [
                        {
                            "text": "Δικαίωμα εγγραφής (w) και εκτέλεσης (x) ΣΤΟΝ ΚΑΤΑΛΟΓΟ που περιέχει το αρχείο.",
                            "correct": true,
                            "explanation": "Η διαγραφή ενός αρχείου είναι ουσιαστικά αλλαγή των περιεχομένων του καταλόγου, οπότε εξαρτάται από τα δικαιώματα του καταλόγου και όχι του ίδιου του αρχείου!"
                        },
                        {
                            "text": "Δικαίωμα εγγραφής (w) στο ίδιο το αρχείο.",
                            "correct": false,
                            "explanation": "Ακόμα και αν το αρχείο είναι read-only, αν έχεις 'w' στον κατάλογο, μπορείς να το διαγράψεις (ίσως με μια επιβεβαίωση)."
                        },
                        {
                            "text": "Δικαίωμα διαγραφής (d) στο αρχείο.",
                            "correct": false,
                            "explanation": "Στο Unix δεν υπάρχει ειδικό δικαίωμα 'd' για διαγραφή. Υπάρχει μόνο r, w, x."
                        }
                    ]
                },
                {
                    "q": "Τι σημαίνει το δικαίωμα εκτέλεσης (x) σε έναν κατάλογο (directory);",
                    "options": [
                        {
                            "text": "Μας επιτρέπει να μπούμε στον κατάλογο (π.χ. με την εντολή cd) και να προσπελάσουμε (traverse) αρχεία μέσα του.",
                            "correct": true,
                            "explanation": "Το 'x' στους καταλόγους λειτουργεί ως δικαίωμα διέλευσης/αναζήτησης. Χωρίς αυτό, το 'cd' αποτυγχάνει."
                        },
                        {
                            "text": "Μας επιτρέπει να δούμε τη λίστα των αρχείων του καταλόγου (π.χ. με ls).",
                            "correct": false,
                            "explanation": "Η προβολή της λίστας αρχείων ελέγχεται από το δικαίωμα ανάγνωσης (r)."
                        },
                        {
                            "text": "Μας επιτρέπει να εκτελέσουμε όλα τα προγράμματα που βρίσκονται μέσα του.",
                            "correct": false,
                            "explanation": "Η εκτέλεση προγραμμάτων εξαρτάται από το δικαίωμα 'x' κάθε μεμονωμένου αρχείου, όχι του καταλόγου."
                        }
                    ]
                }
            ]
        },
        "redirect": {
            "title": "Redirection",
            "questions": [
                {
                    "q": "Πώς στέλνουμε το stderr στο /dev/null;",
                    "options": [
                        {
                            "text": "Με την ανακατεύθυνση `2> /dev/null`",
                            "correct": true,
                            "explanation": "Ο αριθμός 2 αντιστοιχεί στον File Descriptor του stderr."
                        },
                        {
                            "text": "Με την ανακατεύθυνση `> /dev/null`",
                            "correct": false,
                            "explanation": "Αυτό (ή 1>) ανακατευθύνει μόνο το stdout."
                        },
                        {
                            "text": "Με την ανακατεύθυνση `&> /dev/null`",
                            "correct": false,
                            "explanation": "Αυτό ανακατευθύνει ΚΑΙ το stdout ΚΑΙ το stderr μαζί."
                        }
                    ]
                },
                {
                    "q": "Τι κάνει το `command > file 2>&1`;",
                    "options": [
                        {
                            "text": "Στέλνει και το stdout και το stderr στο ίδιο αρχείο.",
                            "correct": true,
                            "explanation": "Το > file στέλνει το 1 (stdout) στο file. Το 2>&1 λέει 'στείλε το 2 (stderr) εκεί που πάει το 1'."
                        },
                        {
                            "text": "Στέλνει μόνο το stderr στο αρχείο.",
                            "correct": false,
                            "explanation": "Για αυτό θα χρειαζόταν `2> file`."
                        },
                        {
                            "text": "Στέλνει το αρχείο ως input στην εντολή (stdin).",
                            "correct": false,
                            "explanation": "Το input redirection γίνεται με το σύμβολο `<`."
                        }
                    ]
                },
                {
                    "q": "Ποια η διαφορά μεταξύ \">\" και \">>\" ;",
                    "options": [
                        {
                            "text": "Το \">\" αντικαθιστά τα περιεχόμενα, ενώ το \">>\" προσθέτει στο τέλος (append).",
                            "correct": true,
                            "explanation": "Το > ισοδυναμεί με O_TRUNC, το >> ισοδυναμεί με O_APPEND."
                        },
                        {
                            "text": "Το \">\" είναι για stdout και το \">>\" για stderr.",
                            "correct": false,
                            "explanation": "Δεν ισχύει. Και τα δύο είναι για stdout, εκτός αν μπει αριθμός μπροστά (π.χ. 2>>)."
                        },
                        {
                            "text": "Το \">\" διαβάζει από αρχείο, ενώ το \">>\" γράφει σε αρχείο.",
                            "correct": false,
                            "explanation": "Η ανάγνωση γίνεται με το `<`."
                        }
                    ]
                },
                {
                    "q": "Τι συμβαίνει αν αντιστρέψουμε τη σειρά: `2>&1 > file`;",
                    "options": [
                        {
                            "text": "Είναι λάθος: το stderr θα πάει στην οθόνη και το stdout στο αρχείο.",
                            "correct": true,
                            "explanation": "Το 2>&1 στέλνει το stderr εκεί που δείχνει το stdout (οθόνη). Μετά το > file αλλάζει μόνο το stdout."
                        },
                        {
                            "text": "Και τα δύο θα πάνε στο αρχείο κανονικά.",
                            "correct": false,
                            "explanation": "Στο bash, η σειρά των redirections (από αριστερά προς τα δεξιά) έχει μεγάλη σημασία."
                        },
                        {
                            "text": "Θα εμφανιστεί syntax error στο bash.",
                            "correct": false,
                            "explanation": "Είναι συντακτικά σωστό, απλά δεν έχει το επιθυμητό αποτέλεσμα."
                        }
                    ]
                },
                {
                    "q": "Τι είναι το /dev/null;",
                    "options": [
                        {
                            "text": "Ένα ειδικό αρχείο που απορροφά και διαγράφει οποιαδήποτε δεδομένα του στέλνουμε.",
                            "correct": true,
                            "explanation": "Γνωστό και ως 'black hole'. Χρησιμοποιείται για να πετάξουμε άχρηστα output."
                        },
                        {
                            "text": "Ένας φάκελος που περιέχει τα αρχεία των διαγραμμένων χρηστών.",
                            "correct": false,
                            "explanation": "Δεν έχει σχέση με χρήστες."
                        },
                        {
                            "text": "Μια μεταβλητή περιβάλλοντος που δείχνει αν υπάρχει σφάλμα.",
                            "correct": false,
                            "explanation": "Είναι αρχείο συσκευής (character device), όχι μεταβλητή."
                        }
                    ]
                }
            ]
        },
        "proc": {
            "title": "Processes",
            "questions": [
                {
                    "q": "Πώς βλέπουμε τις τρέχουσες διεργασίες;",
                    "options": [
                        {
                            "text": "Με την εντολή `ps` ή `top`.",
                            "correct": true,
                            "explanation": "Η `ps` δίνει ένα snapshot, ενώ η `top` δείχνει την κατάσταση ζωντανά (live)."
                        },
                        {
                            "text": "Με την εντολή `ls -p`.",
                            "correct": false,
                            "explanation": "Η `ls -p` απλά προσθέτει / στο τέλος των ονομάτων καταλόγων."
                        },
                        {
                            "text": "Με την εντολή `jobs`.",
                            "correct": false,
                            "explanation": "Η `jobs` δείχνει μόνο τις background διεργασίες του τρέχοντος shell, όχι όλες τις διεργασίες."
                        }
                    ]
                },
                {
                    "q": "Τι στέλνει η εντολή `kill -9 PID`;",
                    "options": [
                        {
                            "text": "Το σήμα SIGKILL, που τερματίζει βίαια τη διεργασία χωρίς να μπορεί να το αγνοήσει.",
                            "correct": true,
                            "explanation": "Χρησιμοποιείται μόνο ως ύστατη λύση όταν η διεργασία έχει κολλήσει."
                        },
                        {
                            "text": "Το σήμα SIGTERM, που ζητάει ευγενικά από τη διεργασία να τερματίσει.",
                            "correct": false,
                            "explanation": "Το SIGTERM (15) είναι το προεπιλεγμένο σήμα του kill, όχι το -9."
                        },
                        {
                            "text": "Το σήμα SIGSTOP, που παγώνει προσωρινά τη διεργασία.",
                            "correct": false,
                            "explanation": "Το SIGSTOP είναι διαφορετικό σήμα (συνήθως 19)."
                        }
                    ]
                },
                {
                    "q": "Τι κάνει το σύμβολο & στο τέλος μιας εντολής;",
                    "options": [
                        {
                            "text": "Εκτελεί την εντολή στο παρασκήνιο (background), απελευθερώνοντας το τερματικό.",
                            "correct": true,
                            "explanation": "Επιτρέπει στον χρήστη να συνεχίσει να γράφει άλλες εντολές στο shell."
                        },
                        {
                            "text": "Συνδέει το stdout της μιας εντολής με το stdin της άλλης.",
                            "correct": false,
                            "explanation": "Αυτό είναι η λειτουργία του pipe (|)."
                        },
                        {
                            "text": "Εκτελεί την εντολή με δικαιώματα root.",
                            "correct": false,
                            "explanation": "Για εκτέλεση με root rights χρησιμοποιείται το `sudo`."
                        }
                    ]
                },
                {
                    "q": "Τι κάνει το shortcut Ctrl+Z;",
                    "options": [
                        {
                            "text": "Σταματά προσωρινά (suspend) την τρέχουσα διεργασία.",
                            "correct": true,
                            "explanation": "Στέλνει το σήμα SIGTSTP, επιτρέποντάς μας να τη συνεχίσουμε μετά με `fg` ή `bg`."
                        },
                        {
                            "text": "Τερματίζει (kill) την τρέχουσα διεργασία.",
                            "correct": false,
                            "explanation": "Αυτό το κάνει το Ctrl+C (στέλνει SIGINT)."
                        },
                        {
                            "text": "Στέλνει χαρακτήρα EOF (End of File).",
                            "correct": false,
                            "explanation": "Αυτό το κάνει το Ctrl+D."
                        }
                    ]
                },
                {
                    "q": "Πώς φέρνουμε μια background διεργασία στο προσκήνιο;",
                    "options": [
                        {
                            "text": "Με την εντολή `fg` (π.χ. `fg %1`).",
                            "correct": true,
                            "explanation": "Η `fg` (foreground) επαναφέρει τον έλεγχο της διεργασίας στο τερματικό."
                        },
                        {
                            "text": "Με την εντολή `bg`.",
                            "correct": false,
                            "explanation": "Η `bg` συνεχίζει μια suspended διεργασία στο background."
                        },
                        {
                            "text": "Με το συνδυασμό Ctrl+F.",
                            "correct": false,
                            "explanation": "Δεν υπάρχει τέτοιο standard shortcut στο τερματικό."
                        }
                    ]
                }
            ]
        },
        "env": {
            "title": "Environment",
            "questions": [
                {
                    "q": "Τι κάνει η εντολή `export VAR=val`;",
                    "options": [
                        {
                            "text": "Ορίζει μια μεταβλητή περιβάλλοντος που περνάει και στις θυγατρικές διεργασίες.",
                            "correct": true,
                            "explanation": "Χωρίς την `export`, η μεταβλητή παραμένει τοπική στο τρέχον shell."
                        },
                        {
                            "text": "Αποθηκεύει τη μεταβλητή μόνιμα στο δίσκο.",
                            "correct": false,
                            "explanation": "Για να γίνει μόνιμη, πρέπει να μπει σε αρχείο όπως το `~/.bashrc`."
                        },
                        {
                            "text": "Διαγράφει τη μεταβλητή από το περιβάλλον.",
                            "correct": false,
                            "explanation": "Αυτό γίνεται με την εντολή `unset`."
                        }
                    ]
                },
                {
                    "q": "Πώς βλέπουμε όλες τις environment variables;",
                    "options": [
                        {
                            "text": "Με την εντολή `env` ή `printenv`.",
                            "correct": true,
                            "explanation": "Αυτές οι εντολές τυπώνουν όλες τις exported μεταβλητές."
                        },
                        {
                            "text": "Με την εντολή `echo $ALL`.",
                            "correct": false,
                            "explanation": "Δεν υπάρχει ειδική μεταβλητή $ALL."
                        },
                        {
                            "text": "Με την εντολή `export -v`.",
                            "correct": false,
                            "explanation": "Δεν είναι έγκυρη εντολή στο bash."
                        }
                    ]
                },
                {
                    "q": "Τι περιέχει η μεταβλητή $PATH;",
                    "options": [
                        {
                            "text": "Μια λίστα καταλόγων όπου το shell ψάχνει για εκτελέσιμα αρχεία.",
                            "correct": true,
                            "explanation": "Αυτό μας επιτρέπει να τρέχουμε π.χ. `ls` αντί για `/bin/ls`."
                        },
                        {
                            "text": "Τον κατάλογο (directory) που βρισκόμαστε αυτή τη στιγμή.",
                            "correct": false,
                            "explanation": "Αυτή η πληροφορία βρίσκεται στη μεταβλητή $PWD (Print Working Directory)."
                        },
                        {
                            "text": "Το ιστορικό των εντολών που έχουμε τρέξει.",
                            "correct": false,
                            "explanation": "Το ιστορικό ρυθμίζεται από άλλες μεταβλητές όπως το $HISTFILE."
                        }
                    ]
                },
                {
                    "q": "Τι επιστρέφει η μεταβλητή $? αν η τελευταία εντολή πέτυχε;",
                    "options": [
                        {
                            "text": "Επιστρέφει 0 (στο Unix το 0 σημαίνει success).",
                            "correct": true,
                            "explanation": "Κάθε τιμή εκτός του 0 σημαίνει ότι υπήρξε κάποιο σφάλμα."
                        },
                        {
                            "text": "Επιστρέφει 1 (boolean true).",
                            "correct": false,
                            "explanation": "Στα exit codes του shell ισχύει το ανάποδο από την C (το 0 είναι success, τα μη-μηδενικά errors)."
                        },
                        {
                            "text": "Επιστρέφει 'true' (string).",
                            "correct": false,
                            "explanation": "Επιστρέφει πάντα ακέραιο αριθμό."
                        }
                    ]
                },
                {
                    "q": "Γιατί χρειαζόμαστε το `./prog` για να τρέξουμε ένα αρχείο στον τρέχοντα κατάλογο;",
                    "options": [
                        {
                            "text": "Γιατί ο τρέχων κατάλογος (.) δεν περιλαμβάνεται στο $PATH για λόγους ασφαλείας.",
                            "correct": true,
                            "explanation": "Αν ήταν στο $PATH, θα μπορούσε κάποιος να βάλει ένα κακόβουλο 'ls' στο /tmp και να το τρέξουμε κατά λάθος."
                        },
                        {
                            "text": "Για να δηλώσουμε ότι το πρόγραμμα είναι compile-αρισμένο σε C.",
                            "correct": false,
                            "explanation": "Ο τρόπος εκτέλεσης δεν εξαρτάται από τη γλώσσα προγραμματισμού."
                        },
                        {
                            "text": "Για να τρέξει με δικαιώματα διαχειριστή (root).",
                            "correct": false,
                            "explanation": "Η εκτέλεση με root γίνεται μέσω του sudo, όχι με το `./`."
                        }
                    ]
                }
            ]
        },
        "links": {
            "title": "Hard & Soft Links",
            "questions": [
                {
                    "q": "Ποια είναι η βασική διαφορά μεταξύ ενός Hard Link (σκληρού συνδέσμου) και ενός Symbolic/Soft Link (συμβολικού συνδέσμου);",
                    "options": [
                        {
                            "text": "Το Hard Link μοιράζεται το ίδιο inode με το αρχικό αρχείο, ενώ το Soft Link είναι απλά ένας δείκτης στο μονοπάτι του αρχείου.",
                            "correct": true,
                            "explanation": "Γι' αυτό, αν μετονομαστεί ή μετακινηθεί το αρχικό αρχείο, το Soft Link 'σπάει', ενώ το Hard Link συνεχίζει να λειτουργεί."
                        },
                        {
                            "text": "Το Hard Link μπορεί να δημιουργηθεί για καταλόγους, ενώ το Soft Link όχι.",
                            "correct": false,
                            "explanation": "Ισχύει το ακριβώς αντίθετο: μόνο τα Soft Links μπορούν να δείχνουν σε καταλόγους (για την αποφυγή κύκλων στο filesystem)."
                        },
                        {
                            "text": "Το Soft Link δημιουργείται με την εντολή 'ln' και το Hard Link με την εντολή 'ln -s'.",
                            "correct": false,
                            "explanation": "Το σωστό είναι το ανάποδο. Η 'ln' φτιάχνει hard links, ενώ η επιλογή '-s' φτιάχνει symbolic links."
                        }
                    ]
                },
                {
                    "q": "Τι θα συμβεί αν διαγράψουμε το αρχικό αρχείο ενώ υπάρχει ένα Hard Link που δείχνει σε αυτό;",
                    "options": [
                        {
                            "text": "Τα δεδομένα παραμένουν στο δίσκο. Το αρχείο διαγράφεται πλήρως μόνο όταν διαγραφούν όλοι οι σύνδεσμοί του (όταν το link count γίνει 0).",
                            "correct": true,
                            "explanation": "Κάθε Hard Link είναι ουσιαστικά ένα ισότιμο 'όνομα' για τα ίδια δεδομένα στο δίσκο."
                        },
                        {
                            "text": "Το Hard Link καταστρέφεται (σπάει) και δεν μπορούμε πλέον να διαβάσουμε τα δεδομένα.",
                            "correct": false,
                            "explanation": "Αυτό είναι το μειονέκτημα των Soft Links, όχι των Hard Links."
                        },
                        {
                            "text": "Το λειτουργικό σύστημα δεν μας επιτρέπει να διαγράψουμε το αρχείο όσο υπάρχουν Hard Links.",
                            "correct": false,
                            "explanation": "Μπορούμε να το διαγράψουμε ελεύθερα. Απλά μειώνεται ο μετρητής συνδέσμων (link count)."
                        }
                    ]
                }
            ]
        }
    },
    "topic2": {
        "anatomy": {
            "title": "Script Anatomy",
            "questions": [
                {
                    "q": "Τι είναι το Shebang (#!)",
                    "options": [
                        {
                            "text": "Είναι η πρώτη γραμμή ενός script που λέει στο λειτουργικό ποιος interpreter πρέπει να εκτελέσει το αρχείο.",
                            "correct": true,
                            "explanation": "Π.χ. `#!/bin/bash` λέει στον kernel να τρέξει το αρχείο μέσω του bash."
                        },
                        {
                            "text": "Είναι ένας ειδικός χαρακτήρας για να κάνουμε σχόλια (comments) σε C.",
                            "correct": false,
                            "explanation": "Τα σχόλια στη C γίνονται με `//` ή `/* */`. Το `#` χρησιμοποιείται για τον preprocessor."
                        },
                        {
                            "text": "Είναι μια εντολή για να τερματίσει ένα script με σφάλμα.",
                            "correct": false,
                            "explanation": "Ο τερματισμός με σφάλμα γίνεται με την εντολή `exit 1`."
                        }
                    ]
                },
                {
                    "q": "Ποια η διαφορά μεταξύ εκτέλεσης `./script.sh` και `source script.sh`;",
                    "options": [
                        {
                            "text": "Το `./` τρέχει σε νέο subshell, ενώ το `source` τρέχει στο τρέχον shell.",
                            "correct": true,
                            "explanation": "Με το `source` (ή `.`), όποιες μεταβλητές ορίσει το script θα παραμείνουν διαθέσιμες στο shell μας μετά τον τερματισμό του."
                        },
                        {
                            "text": "Το `./` εκτελεί το script ως root, ενώ το `source` ως απλός χρήστης.",
                            "correct": false,
                            "explanation": "Και οι δύο τρόποι εκτελούν τον κώδικα με τα δικαιώματα του τρέχοντος χρήστη."
                        },
                        {
                            "text": "Δεν υπάρχει καμία διαφορά.",
                            "correct": false,
                            "explanation": "Υπάρχει τεράστια διαφορά στο περιβάλλον (environment) εκτέλεσης."
                        }
                    ]
                },
                {
                    "q": "Τι πρέπει να κάνουμε για να τρέξει ένα script ως `./script.sh`;",
                    "options": [
                        {
                            "text": "Πρέπει να του δώσουμε δικαιώματα εκτέλεσης με `chmod +x script.sh`.",
                            "correct": true,
                            "explanation": "Το λειτουργικό δεν επιτρέπει την εκτέλεση αρχείων που δεν έχουν το bit 'x' (execute) ενεργοποιημένο."
                        },
                        {
                            "text": "Πρέπει να το μεταγλωττίσουμε (compile) πρώτα με τον gcc.",
                            "correct": false,
                            "explanation": "Τα shell scripts είναι interpreted languages, δεν γίνονται compile όπως η C."
                        },
                        {
                            "text": "Πρέπει να βάλουμε την κατάληξη `.exe` στο αρχείο.",
                            "correct": false,
                            "explanation": "Στο Unix η κατάληξη (extension) δεν παίζει ρόλο. Τα δικαιώματα καθορίζουν αν ένα αρχείο είναι εκτελέσιμο."
                        }
                    ]
                }
            ]
        },
        "vars": {
            "title": "Variables",
            "questions": [
                {
                    "q": "Πώς ορίζουμε μια μεταβλητή στο Bash;",
                    "options": [
                        {
                            "text": "NAME=VALUE (χωρίς κενά γύρω από το =).",
                            "correct": true,
                            "explanation": "Αν βάλουμε κενά (π.χ. `NAME = VALUE`), το bash θα θεωρήσει το 'NAME' ως εντολή προς εκτέλεση."
                        },
                        {
                            "text": "$NAME=VALUE",
                            "correct": false,
                            "explanation": "Το σύμβολο `$` χρησιμοποιείται για την ανάγνωση της τιμής, όχι για την ανάθεση."
                        },
                        {
                            "text": "var NAME = VALUE",
                            "correct": false,
                            "explanation": "Αυτή είναι η σύνταξη της JavaScript, όχι του bash."
                        }
                    ]
                },
                {
                    "q": "Πώς παίρνουμε την τιμή μιας μεταβλητής;",
                    "options": [
                        {
                            "text": "Με το σύμβολο $, π.χ. $NAME.",
                            "correct": true,
                            "explanation": "Το bash αντικαθιστά το `$NAME` (ή `${NAME}`) με την τιμή της μεταβλητής."
                        },
                        {
                            "text": "Με το σύμβολο %, π.χ. %NAME%.",
                            "correct": false,
                            "explanation": "Αυτό είναι χαρακτηριστικό του Windows Command Prompt (CMD)."
                        },
                        {
                            "text": "Με την εντολή `get NAME`.",
                            "correct": false,
                            "explanation": "Δεν υπάρχει τέτοια εντολή στο bash."
                        }
                    ]
                },
                {
                    "q": "Ποια η διαφορά double quotes (\") και single quotes (') στις μεταβλητές;",
                    "options": [
                        {
                            "text": "Στα `\"` οι μεταβλητές επεκτείνονται (διαβάζεται η τιμή τους), ενώ στα `'` θεωρούνται απλό κείμενο.",
                            "correct": true,
                            "explanation": "Π.χ. αν X=5, το `echo \"$X\"` τυπώνει 5, αλλά το `echo '$X'` τυπώνει κυριολεκτικά $X."
                        },
                        {
                            "text": "Τα `\"` χρησιμοποιούνται για numbers, ενώ τα `'` για strings.",
                            "correct": false,
                            "explanation": "Στο bash όλα πρακτικά χειρίζονται ως strings (character arrays)."
                        },
                        {
                            "text": "Στα `'` επεκτείνονται μόνο οι environment variables, ενώ στα `\"` όλες.",
                            "correct": false,
                            "explanation": "Τα μονά εισαγωγικά αποκλείουν κάθε είδους expansion."
                        }
                    ]
                },
                {
                    "q": "Πώς διαγράφουμε μια μεταβλητή;",
                    "options": [
                        {
                            "text": "Με την εντολή `unset VAR_NAME`.",
                            "correct": true,
                            "explanation": "Η unset αφαιρεί τελείως τη μεταβλητή από τη μνήμη του shell."
                        },
                        {
                            "text": "Θέτοντας την ίση με null: `VAR_NAME=null`.",
                            "correct": false,
                            "explanation": "Αυτό απλά αποθηκεύει το string 'null' στη μεταβλητή."
                        },
                        {
                            "text": "Με την εντολή `delete VAR_NAME`.",
                            "correct": false,
                            "explanation": "Δεν υπάρχει εντολή delete στο bash."
                        }
                    ]
                }
            ]
        },
        "specvars": {
            "title": "Special Variables",
            "questions": [
                {
                    "q": "Τι περιέχει η μεταβλητή $?;",
                    "options": [
                        {
                            "text": "Το exit status της τελευταίας εντολής που εκτελέστηκε.",
                            "correct": true,
                            "explanation": "Αν η εντολή πέτυχε έχει την τιμή 0. Αν απέτυχε, έχει μη-μηδενική τιμή (συνήθως 1-255)."
                        },
                        {
                            "text": "Το Process ID (PID) του shell.",
                            "correct": false,
                            "explanation": "Το PID αποθηκεύεται στη μεταβλητή `$$`."
                        },
                        {
                            "text": "Τον αριθμό των παραμέτρων του script.",
                            "correct": false,
                            "explanation": "Αυτό αποθηκεύεται στη μεταβλητή `$#`."
                        }
                    ]
                },
                {
                    "q": "Τι είναι η $#;",
                    "options": [
                        {
                            "text": "Ο αριθμός των ορισμάτων (arguments) που πέρασαν στο script.",
                            "correct": true,
                            "explanation": "Π.χ. αν τρέξουμε `./script.sh a b c`, η μεταβλητή `$#` θα έχει την τιμή 3."
                        },
                        {
                            "text": "Το μέγεθος του αρχείου του script.",
                            "correct": false,
                            "explanation": "Για να βρούμε το μέγεθος χρειάζονται εντολές όπως `wc` ή `stat`."
                        },
                        {
                            "text": "Ο αριθμός της τρέχουσας γραμμής (line number).",
                            "correct": false,
                            "explanation": "Ο αριθμός γραμμής είναι στη μεταβλητή `$LINENO`."
                        }
                    ]
                },
                {
                    "q": "Τι περιέχει η μεταβλητή $$;",
                    "options": [
                        {
                            "text": "Το PID (Process ID) του τρέχοντος script / shell.",
                            "correct": true,
                            "explanation": "Χρησιμοποιείται συχνά για τη δημιουργία μοναδικών προσωρινών αρχείων, π.χ. `/tmp/file_$$`."
                        },
                        {
                            "text": "Το τελευταίο όρισμα του script.",
                            "correct": false,
                            "explanation": "Για αυτό χρησιμοποιούμε `${!#}`."
                        },
                        {
                            "text": "Έναν τυχαίο αριθμό.",
                            "correct": false,
                            "explanation": "Οι τυχαίοι αριθμοί βρίσκονται στη μεταβλητή `$RANDOM`."
                        }
                    ]
                },
                {
                    "q": "Τι είναι η $0;",
                    "options": [
                        {
                            "text": "Το όνομα του ίδιου του script (όπως κλήθηκε).",
                            "correct": true,
                            "explanation": "Τα υπόλοιπα ορίσματα (από το 1ο και μετά) μπαίνουν στα `$1`, `$2`, κλπ."
                        },
                        {
                            "text": "Η πρώτη συνάρτηση του script.",
                            "correct": false,
                            "explanation": "Οι συναρτήσεις δεν αποθηκεύονται σε αριθμητικές μεταβλητές."
                        },
                        {
                            "text": "Το default argument αν δεν δοθεί κανένα.",
                            "correct": false,
                            "explanation": "Το default fallback γίνεται με default values, π.χ. `${1:-default}`."
                        }
                    ]
                },
                {
                    "q": "Τι περιέχει η $!;",
                    "options": [
                        {
                            "text": "Το PID της τελευταίας διεργασίας που εκτελέστηκε στο background.",
                            "correct": true,
                            "explanation": "Αυτό είναι εξαιρετικά χρήσιμο αν θέλουμε να περιμένουμε (wait) ή να 'σκοτώσουμε' αυτή τη διεργασία."
                        },
                        {
                            "text": "Το αποτέλεσμα της εντολής `history`.",
                            "correct": false,
                            "explanation": "Δεν έχει σχέση με το ιστορικό."
                        },
                        {
                            "text": "Μια boolean τιμή για το αν η τελευταία εντολή ήταν valid.",
                            "correct": false,
                            "explanation": "Αυτό ελέγχεται μέσω της μεταβλητής `$?`."
                        }
                    ]
                }
            ]
        },
        "args": {
            "title": "Arguments",
            "questions": [
                {
                    "q": "Ποια η διαφορά \"$@\" και \"$*\";",
                    "options": [
                        {
                            "text": "Το \"$@\" διατηρεί τα ορίσματα ως ξεχωριστά strings, ενώ το \"$*\" τα ενώνει σε ένα.",
                            "correct": true,
                            "explanation": "Αν υπάρχουν κενά μέσα στα ορίσματα, το `\"$@\"` τα κρατάει ασφαλή (π.χ. σε ένα for loop)."
                        },
                        {
                            "text": "Το \"$*\" είναι για ακέραιους αριθμούς και το \"$@\" για strings.",
                            "correct": false,
                            "explanation": "Και τα δύο χειρίζονται strings."
                        },
                        {
                            "text": "Δεν υπάρχει απολύτως καμία διαφορά.",
                            "correct": false,
                            "explanation": "Όταν βρίσκονται μέσα σε διπλά εισαγωγικά, η διαφορά τους είναι καθοριστική."
                        }
                    ]
                },
                {
                    "q": "Πώς διαβάζουμε είσοδο από τον χρήστη κατά την εκτέλεση;",
                    "options": [
                        {
                            "text": "Με την εντολή `read VAR_NAME`.",
                            "correct": true,
                            "explanation": "Η read σταματάει την εκτέλεση και περιμένει τον χρήστη να πληκτρολογήσει κάτι και να πατήσει Enter."
                        },
                        {
                            "text": "Με την εντολή `input VAR_NAME`.",
                            "correct": false,
                            "explanation": "Δεν υπάρχει εντολή input στο bash (όπως π.χ. στην Python)."
                        },
                        {
                            "text": "Με την εντολή `scanf VAR_NAME`.",
                            "correct": false,
                            "explanation": "Αυτό είναι η C, όχι το bash."
                        }
                    ]
                },
                {
                    "q": "Τι κάνει το flag -r στην εντολή `read -r`;",
                    "options": [
                        {
                            "text": "Raw input: αποτρέπει την ερμηνεία του backslash (\\) ως escape character.",
                            "correct": true,
                            "explanation": "Είναι best practice να χρησιμοποιούμε σχεδόν πάντα το `-r` με τη `read`."
                        },
                        {
                            "text": "Read-only: η μεταβλητή δεν μπορεί να αλλάξει μετά.",
                            "correct": false,
                            "explanation": "Για read-only μεταβλητές χρησιμοποιούμε την εντολή `readonly`."
                        },
                        {
                            "text": "Reverse: διαβάζει τα γράμματα ανάποδα.",
                            "correct": false,
                            "explanation": "Δεν υπάρχει τέτοια λειτουργία."
                        }
                    ]
                }
            ]
        },
        "cond": {
            "title": "Conditions",
            "questions": [
                {
                    "q": "Πώς ελέγχουμε αν ένα αρχείο υπάρχει;",
                    "options": [
                        {
                            "text": "if [ -e filename ]; then ... fi",
                            "correct": true,
                            "explanation": "Το flag `-e` (exists) ελέγχει αν το αρχείο ή ο φάκελος υπάρχει."
                        },
                        {
                            "text": "if exists(filename); then ... fi",
                            "correct": false,
                            "explanation": "Αυτό δεν είναι συντακτικά σωστό στο bash."
                        },
                        {
                            "text": "if [ filename ]; then ... fi",
                            "correct": false,
                            "explanation": "Αυτό θα ελέγξει αν το string 'filename' δεν είναι κενό, όχι αν υπάρχει τέτοιο αρχείο στο δίσκο."
                        }
                    ]
                },
                {
                    "q": "Ποιοι είναι οι numeric operators για ίσον, άνισον και μικρότερο;",
                    "options": [
                        {
                            "text": "-eq (equal), -ne (not equal), -lt (less than).",
                            "correct": true,
                            "explanation": "Στο bash χρησιμοποιούμε γράμματα για συγκρίσεις αριθμών, π.χ. `[ $A -lt 5 ]`."
                        },
                        {
                            "text": "== (equal), != (not equal), < (less than).",
                            "correct": false,
                            "explanation": "Αυτά τα σύμβολα στο bash (`[ ... ]`) χρησιμοποιούνται για σύγκριση strings (αλφαριθμητικών), όχι για αριθμούς."
                        },
                        {
                            "text": "= (equal), <> (not equal), < (less than).",
                            "correct": false,
                            "explanation": "Αυτό μοιάζει με SQL, όχι με Bash."
                        }
                    ]
                },
                {
                    "q": "Γιατί χρειαζόμαστε spaces (κενά) μέσα στις αγκύλες [ ];",
                    "options": [
                        {
                            "text": "Γιατί το [ είναι στην πραγματικότητα εντολή (ίδια με το test) και τα υπόλοιπα είναι arguments.",
                            "correct": true,
                            "explanation": "Εάν γράψουμε `[$A -eq 5]`, το shell θα ψάξει για μια εντολή με όνομα `[$A` η οποία δεν υπάρχει."
                        },
                        {
                            "text": "Για να φαίνεται πιο όμορφος ο κώδικας (σύμβαση).",
                            "correct": false,
                            "explanation": "Είναι αυστηρός συντακτικός κανόνας, όχι απλά θέμα ομορφιάς."
                        },
                        {
                            "text": "Επειδή οι αγκύλες είναι ειδικοί χαρακτήρες του C compiler.",
                            "correct": false,
                            "explanation": "Δεν έχει σχέση με τη γλώσσα C."
                        }
                    ]
                },
                {
                    "q": "Πώς συντάσσεται ένα case statement;",
                    "options": [
                        {
                            "text": "case $VAR in pattern) cmd ;; *) default ;; esac",
                            "correct": true,
                            "explanation": "Κάθε case τελειώνει με `;;` (διπλό ερωτηματικό) και ολόκληρο το block κλείνει με `esac` (case ανάποδα)."
                        },
                        {
                            "text": "switch($VAR) { case pattern: cmd; break; default: cmd; }",
                            "correct": false,
                            "explanation": "Αυτή είναι η σύνταξη της C/C++, όχι του bash."
                        },
                        {
                            "text": "if $VAR == pattern then cmd else default fi",
                            "correct": false,
                            "explanation": "Αυτό θυμίζει απλό if-else statement."
                        }
                    ]
                }
            ]
        },
        "loops": {
            "title": "Loops",
            "questions": [
                {
                    "q": "Πώς κάνουμε loop σε όλα τα αρχεία .c του καταλόγου;",
                    "options": [
                        {
                            "text": "for f in *.c; do ... done",
                            "correct": true,
                            "explanation": "Το bash κάνει αυτόματα glob expansion, δηλαδή αντικαθιστά το `*.c` με μια λίστα από τα αντίστοιχα αρχεία."
                        },
                        {
                            "text": "for f in `ls *.c`; do ... done",
                            "correct": false,
                            "explanation": "Αν και δουλεύει συχνά, είναι κακή πρακτική. Αν τα ονόματα έχουν κενά, αυτό το loop θα 'σπάσει'."
                        },
                        {
                            "text": "while (f = getNext(\"*.c\")); do ... done",
                            "correct": false,
                            "explanation": "Συντακτικό λάθος. Δεν υπάρχει getNext στο bash."
                        }
                    ]
                },
                {
                    "q": "Πώς φτιάχνουμε ένα range loop από το 1 έως το 10;",
                    "options": [
                        {
                            "text": "for i in {1..10}; do ... done",
                            "correct": true,
                            "explanation": "Η σύνταξη brace expansion `{START..END}` είναι ο πιο γρήγορος τρόπος για loop ακέραιων αριθμών."
                        },
                        {
                            "text": "for (i=1; i<=10; i++)",
                            "correct": false,
                            "explanation": "Αυτή είναι η (επίσης αποδεκτή) C-style σύνταξη στο bash `for ((i=1; i<=10; i++)); do ... done`, αλλά απαιτεί διπλές παρενθέσεις."
                        },
                        {
                            "text": "for i in range(1, 11):",
                            "correct": false,
                            "explanation": "Αυτή είναι η σύνταξη της Python."
                        }
                    ]
                },
                {
                    "q": "Ποια η διαφορά while και until;",
                    "options": [
                        {
                            "text": "Το while τρέχει όσο η συνθήκη είναι αληθής, ενώ το until τρέχει μέχρι να γίνει αληθής.",
                            "correct": true,
                            "explanation": "Το `until [ συνθήκη ]` είναι πρακτικά το ίδιο με το `while ! [ συνθήκη ]`."
                        },
                        {
                            "text": "Το until εκτελείται πάντα τουλάχιστον 1 φορά (σαν το do-while), ενώ το while όχι.",
                            "correct": false,
                            "explanation": "Δεν ισχύει. Και τα δύο ελέγχουν τη συνθήκη στην αρχή."
                        },
                        {
                            "text": "Το while είναι για αριθμούς και το until για αρχεία.",
                            "correct": false,
                            "explanation": "Μπορούν και τα δύο να ελέγξουν οποιαδήποτε συνθήκη."
                        }
                    ]
                }
            ]
        },
        "arith": {
            "title": "Arithmetic",
            "questions": [
                {
                    "q": "Πώς κάνουμε πρόσθεση στο Bash;",
                    "options": [
                        {
                            "text": "echo $((1 + 2))",
                            "correct": true,
                            "explanation": "Το $(( ... )) ονομάζεται arithmetic expansion και εκτελεί τις πράξεις μέσα του."
                        },
                        {
                            "text": "echo 1 + 2",
                            "correct": false,
                            "explanation": "Αυτό θα τυπώσει απλά το string '1 + 2', δεν θα κάνει την πράξη."
                        },
                        {
                            "text": "add 1 2",
                            "correct": false,
                            "explanation": "Δεν υπάρχει τέτοια εντολή στο bash."
                        }
                    ]
                },
                {
                    "q": "Τι είδους αριθμητική κάνει το $(( ));",
                    "options": [
                        {
                            "text": "Μόνο ακέραια αριθμητική (integer arithmetic).",
                            "correct": true,
                            "explanation": "Δεν υποστηρίζει δεκαδικούς ψηφία. Αν κάνετε $((5/2)), το αποτέλεσμα θα είναι 2 (στρογγυλοποίηση προς τα κάτω)."
                        },
                        {
                            "text": "Floating point αριθμητική.",
                            "correct": false,
                            "explanation": "Το bash δεν υποστηρίζει εγγενώς πράξεις κινητής υποδιαστολής."
                        },
                        {
                            "text": "Αριθμητική σε δεκαεξαδικό σύστημα μόνο.",
                            "correct": false,
                            "explanation": "Υποστηρίζει διάφορα συστήματα, αλλά κυρίως δεκαδικό."
                        }
                    ]
                },
                {
                    "q": "Πώς μπορούμε να κάνουμε πράξεις με δεκαδικούς (floats);",
                    "options": [
                        {
                            "text": "Χρησιμοποιώντας την εντολή `bc` (basic calculator).",
                            "correct": true,
                            "explanation": "Π.χ. `echo \"scale=2; 5/2\" | bc` δίνει το αποτέλεσμα `2.50`."
                        },
                        {
                            "text": "Βάζοντας `.0` μετά τους αριθμούς στο $(( )).",
                            "correct": false,
                            "explanation": "Αν βάλεις `.0` μέσα σε $(( )), θα βγάλει 'syntax error: invalid arithmetic operator'."
                        },
                        {
                            "text": "Με το να γράψουμε `export MATH=float`.",
                            "correct": false,
                            "explanation": "Δεν υπάρχει τέτοια ρύθμιση περιβάλλοντος."
                        }
                    ]
                }
            ]
        },
        "funcs": {
            "title": "Functions",
            "questions": [
                {
                    "q": "Πώς ορίζουμε μια local μεταβλητή σε function;",
                    "options": [
                        {
                            "text": "Με τη λέξη κλειδί local, π.χ. `local x=10`.",
                            "correct": true,
                            "explanation": "Αν παραλείψουμε το `local`, η μεταβλητή θα είναι global και ίσως αντικαταστήσει (overwrite) κάποια άλλη με το ίδιο όνομα στο script."
                        },
                        {
                            "text": "Με τη λέξη κλειδί var, π.χ. `var x=10`.",
                            "correct": false,
                            "explanation": "Αυτό είναι σύνταξη JavaScript."
                        },
                        {
                            "text": "Με το να τη γράψουμε με μικρά γράμματα.",
                            "correct": false,
                            "explanation": "Η σύμβαση λέει ότι οι local γράφονται με μικρά γράμματα, αλλά συντακτικά παραμένουν global χωρίς το `local`."
                        }
                    ]
                },
                {
                    "q": "Τι επιστρέφει η εντολή `return N` σε μια function;",
                    "options": [
                        {
                            "text": "Επιστρέφει ένα exit status (0-255), όχι δεδομένα.",
                            "correct": true,
                            "explanation": "Η `return` είναι σαν το exit code της συνάρτησης. Μπορείς να ελέγξεις την τιμή με το `$?` μετά την κλήση της."
                        },
                        {
                            "text": "Επιστρέφει δεδομένα ως string.",
                            "correct": false,
                            "explanation": "Η `return` δεν μπορεί να επιστρέψει string στο bash."
                        },
                        {
                            "text": "Τερματίζει εντελώς το τρέχον script.",
                            "correct": false,
                            "explanation": "Αυτό το κάνει η εντολή `exit`. Η `return` βγαίνει μόνο από τη συνάρτηση."
                        }
                    ]
                },
                {
                    "q": "Πώς επιστρέφουμε δεδομένα (π.χ. string) από μια function;",
                    "options": [
                        {
                            "text": "Τυπώνοντάς τα με `echo` και 'πιάνοντάς' τα με command substitution `$( )`.",
                            "correct": true,
                            "explanation": "Π.χ. `RESULT=$(my_func)`"
                        },
                        {
                            "text": "Με τη χρήση του keyword `return \"string\"`.",
                            "correct": false,
                            "explanation": "Η `return` δέχεται μόνο ακέραιους (0-255)."
                        },
                        {
                            "text": "Με το keyword `yield`.",
                            "correct": false,
                            "explanation": "Το bash δεν έχει `yield` (το έχει η Python)."
                        }
                    ]
                }
            ]
        },
        "strings": {
            "title": "String Manipulation",
            "questions": [
                {
                    "q": "Πώς αφαιρούμε την κατάληξη (suffix) .txt από μια μεταβλητή;",
                    "options": [
                        {
                            "text": "${VAR%.txt}",
                            "correct": true,
                            "explanation": "Το σύμβολο `%` αφαιρεί το μικρότερο ταίριασμα από το τέλος (δεξιά) του string."
                        },
                        {
                            "text": "${VAR#.txt}",
                            "correct": false,
                            "explanation": "Το `#` αφαιρεί από την αρχή (prefix), οπότε δεν θα βρει το '.txt' εκτός αν ήταν στην αρχή της λέξης."
                        },
                        {
                            "text": "${VAR//.txt/}",
                            "correct": false,
                            "explanation": "Αυτό δουλεύει (global replace), αλλά είναι γενική αντικατάσταση. Θα έσβηνε και ένα .txt στη μέση της λέξης."
                        }
                    ]
                },
                {
                    "q": "Πώς βρίσκουμε το μήκος (length) ενός string;",
                    "options": [
                        {
                            "text": "Με το σύμβολο # στην αρχή: ${#VAR}.",
                            "correct": true,
                            "explanation": "Π.χ. αν VAR='hello', το `${#VAR}` θα μας δώσει 5."
                        },
                        {
                            "text": "Με την εντολή `len($VAR)`.",
                            "correct": false,
                            "explanation": "Σύνταξη τύπου Python."
                        },
                        {
                            "text": "Με την επέκταση ${VAR:length}.",
                            "correct": false,
                            "explanation": "Το `:offset:length` είναι για εξαγωγή υποσυμβολοσειράς (substring)."
                        }
                    ]
                },
                {
                    "q": "Ποια η διαφορά % και # στο parameter expansion;",
                    "options": [
                        {
                            "text": "Το % αφαιρεί από τα δεξιά (τέλος), ενώ το # από τα αριστερά (αρχή).",
                            "correct": true,
                            "explanation": "Ένα mnemonic είναι το πληκτρολόγιο: το '#' (Shift+3) είναι αριστερά από το '%' (Shift+5)."
                        },
                        {
                            "text": "Το # διαγράφει αριθμούς και το % γράμματα.",
                            "correct": false,
                            "explanation": "Και τα δύο λειτουργούν με pattern matching ανεξαρτήτως χαρακτήρων."
                        },
                        {
                            "text": "Δεν υπάρχει διαφορά, είναι συνώνυμα.",
                            "correct": false,
                            "explanation": "Η διαφορά τους είναι καθοριστική."
                        }
                    ]
                }
            ]
        }
    },
    "topic3": {
        "errors": {
            "title": "Error Handling",
            "questions": [
                {
                    "q": "Τι τιμή επιστρέφουν συνήθως οι syscalls σε αποτυχία;",
                    "options": [
                        {
                            "text": "-1.",
                            "correct": true,
                            "explanation": "Σχεδόν όλα τα system calls επιστρέφουν -1 όταν αποτύχουν, και ταυτόχρονα θέτουν την παγκόσμια μεταβλητή errno."
                        },
                        {
                            "text": "0.",
                            "correct": false,
                            "explanation": "Το 0 συνήθως σημαίνει επιτυχία (success)."
                        },
                        {
                            "text": "Τον κωδικό του σφάλματος (π.χ. 2 για ENOENT).",
                            "correct": false,
                            "explanation": "Ο κωδικός σφάλματος γράφεται στην errno, η συνάρτηση επιστρέφει απλά -1."
                        }
                    ]
                },
                {
                    "q": "Τι είναι η errno;",
                    "options": [
                        {
                            "text": "Μια global μεταβλητή (macro) που περιέχει τον κωδικό του τελευταίου σφάλματος.",
                            "correct": true,
                            "explanation": "Είναι thread-local, οπότε κάθε νήμα βλέπει τη δική του errno."
                        },
                        {
                            "text": "Μια συνάρτηση που τυπώνει το σφάλμα.",
                            "correct": false,
                            "explanation": "Αυτή είναι η perror()."
                        },
                        {
                            "text": "Ένα system call για να δούμε αν υπάρχει σφάλμα.",
                            "correct": false,
                            "explanation": "Δεν είναι system call, είναι μεταβλητή που ορίζεται στο <errno.h>."
                        }
                    ]
                },
                {
                    "q": "Ποια η διαφορά perror() και strerror();",
                    "options": [
                        {
                            "text": "Η perror() τυπώνει απευθείας στο stderr, ενώ η strerror() επιστρέφει το string του σφάλματος.",
                            "correct": true,
                            "explanation": "Αν θέλεις απλά να τυπώσεις ένα μήνυμα, η perror() είναι πιο γρήγορη. Η strerror(errno) σου δίνει το string για να το κάνεις ό,τι θες (π.χ. log, GUI)."
                        },
                        {
                            "text": "Η perror() επιστρέφει τον κωδικό του σφάλματος, η strerror() το τυπώνει.",
                            "correct": false,
                            "explanation": "Ισχύει το αντίστροφο ως προς την εκτύπωση."
                        },
                        {
                            "text": "Η perror() είναι για standard library, η strerror() για syscalls.",
                            "correct": false,
                            "explanation": "Και οι δύο μεταφράζουν κωδικούς από το <errno.h> ανεξαρτήτως από πού προήλθαν."
                        }
                    ]
                },
                {
                    "q": "Πότε επιτρέπεται να ελέγξουμε την τιμή της errno;",
                    "options": [
                        {
                            "text": "Μόνο αμέσως μετά από μια κλήση που επέστρεψε αποτυχία (-1 ή NULL).",
                            "correct": true,
                            "explanation": "Η errno δεν μηδενίζεται (clear) ποτέ από τις συναρτήσεις. Μπορεί να περιέχει ένα παλιό 'σκουπίδι' αν η κλήση πέτυχε."
                        },
                        {
                            "text": "Οποιαδήποτε στιγμή, πριν ή μετά από κάθε system call.",
                            "correct": false,
                            "explanation": "Αν η κλήση πετύχει, η τιμή της errno είναι undefined (διατηρεί την προηγούμενη τιμή)."
                        },
                        {
                            "text": "Μόνο κατά τον τερματισμό του προγράμματος.",
                            "correct": false,
                            "explanation": "Τότε είναι πολύ αργά για error handling."
                        }
                    ]
                }
            ]
        },
        "fd": {
            "title": "File Descriptors",
            "questions": [
                {
                    "q": "Ποιοι είναι οι FDs 0, 1, 2;",
                    "options": [
                        {
                            "text": "0: stdin, 1: stdout, 2: stderr.",
                            "correct": true,
                            "explanation": "Αυτά είναι τα standard ρεύματα (streams) που ανοίγει αυτόματα το λειτουργικό για κάθε διεργασία."
                        },
                        {
                            "text": "0: system, 1: root, 2: user.",
                            "correct": false,
                            "explanation": "Δεν υπάρχει τέτοια αντιστοιχία."
                        },
                        {
                            "text": "0: stdout, 1: stdin, 2: stderr.",
                            "correct": false,
                            "explanation": "Έχετε αντιστρέψει το 0 (standard input) με το 1 (standard output)."
                        }
                    ]
                },
                {
                    "q": "Ποιο FD θα πάρει το επόμενο open() αν κλείσουμε το stdin (0);",
                    "options": [
                        {
                            "text": "Το 0, γιατί ο kernel δίνει πάντα τον μικρότερο διαθέσιμο (ελεύθερο) FD.",
                            "correct": true,
                            "explanation": "Αυτός ο κανόνας 'lowest available FD' είναι η βάση για το redirection στο Unix."
                        },
                        {
                            "text": "Το 3.",
                            "correct": false,
                            "explanation": "Το 3 θα το έπαιρνε μόνο αν τα 0, 1, 2 ήταν όλα κατειλημμένα."
                        },
                        {
                            "text": "Θα αποτύχει, γιατί το 0 είναι προστατευμένο.",
                            "correct": false,
                            "explanation": "Από τη στιγμή που κάνουμε close(0), είναι ελεύθερο για οποιαδήποτε χρήση."
                        }
                    ]
                },
                {
                    "q": "Τι συμβαίνει στον FD table κατά τη fork();",
                    "options": [
                        {
                            "text": "Το παιδί παίρνει ένα ακριβές αντίγραφο του FD table του πατέρα.",
                            "correct": true,
                            "explanation": "Άρα και οι δύο δείχνουν στα ίδια ανοιχτά αρχεία, μοιράζονται το ίδιο file offset κτλ."
                        },
                        {
                            "text": "Το παιδί ξεκινάει με άδειο FD table (μόνο τα 0,1,2).",
                            "correct": false,
                            "explanation": "Κληρονομεί όλα τα ανοιχτά αρχεία του πατέρα."
                        },
                        {
                            "text": "Τα FDs του πατέρα κλείνουν αυτόματα.",
                            "correct": false,
                            "explanation": "Τα αρχεία μένουν ανοιχτά και για τους δύο."
                        }
                    ]
                }
            ]
        },
        "open": {
            "title": "open()",
            "questions": [
                {
                    "q": "Τι κάνει το flag O_TRUNC;",
                    "options": [
                        {
                            "text": "Αδειάζει (κόβει σε 0 bytes) το αρχείο αν υπάρχει ήδη.",
                            "correct": true,
                            "explanation": "Ισοδυναμεί με τη λειτουργία του `>` στο shell."
                        },
                        {
                            "text": "Αποτυγχάνει αν το αρχείο δεν υπάρχει.",
                            "correct": false,
                            "explanation": "Αν δεν υπάρχει (και έχουμε βάλει O_CREAT), απλά δημιουργείται."
                        },
                        {
                            "text": "Προσθέτει τα δεδομένα στο τέλος του αρχείου.",
                            "correct": false,
                            "explanation": "Αυτό είναι το flag O_APPEND."
                        }
                    ]
                },
                {
                    "q": "Πότε είναι απαραίτητο το 3ο argument (mode) στην open();",
                    "options": [
                        {
                            "text": "Όταν χρησιμοποιούμε το flag O_CREAT για να δημιουργήσουμε νέο αρχείο.",
                            "correct": true,
                            "explanation": "Το 3ο όρισμα καθορίζει τα δικαιώματα (permissions, π.χ. 0644) με τα οποία θα φτιαχτεί το αρχείο."
                        },
                        {
                            "text": "Όταν γράφουμε (O_WRONLY) σε ένα αρχείο.",
                            "correct": false,
                            "explanation": "Αν το αρχείο υπάρχει ήδη, δεν χρειάζεται το mode."
                        },
                        {
                            "text": "Όταν ανοίγουμε ένα directory.",
                            "correct": false,
                            "explanation": "Η open() δεν χρησιμοποιείται (συνήθως) για ανάγνωση directories, χρειάζεται opendir()."
                        }
                    ]
                },
                {
                    "q": "Τι κάνει το flag O_APPEND;",
                    "options": [
                        {
                            "text": "Κάνει όλες τις εγγραφές (writes) να γίνονται στο τέλος του αρχείου, ατομικά.",
                            "correct": true,
                            "explanation": "Το O_APPEND εξασφαλίζει ότι το pointer θα μεταφερθεί στο τέλος ΠΡΙΝ από κάθε εγγραφή (ατομική λειτουργία), χρήσιμο για log files."
                        },
                        {
                            "text": "Ανοίγει το αρχείο για ανάγνωση από το τέλος προς την αρχή.",
                            "correct": false,
                            "explanation": "Δεν υπάρχει flag για κάτι τέτοιο."
                        },
                        {
                            "text": "Αποτρέπει τη διαγραφή του αρχείου.",
                            "correct": false,
                            "explanation": "Αυτό ρυθμίζεται από τα permissions του καταλόγου, όχι της open()."
                        }
                    ]
                },
                {
                    "q": "Τι κάνει το O_EXCL σε συνδυασμό με το O_CREAT;",
                    "options": [
                        {
                            "text": "Η open() αποτυγχάνει αν το αρχείο υπάρχει ήδη (ατομική δημιουργία).",
                            "correct": true,
                            "explanation": "Χρησιμοποιείται για να φτιάξουμε lock files (εγγυάται ότι ΕΜΕΙΣ φτιάξαμε το αρχείο)."
                        },
                        {
                            "text": "Δίνει αποκλειστική (exclusive) πρόσβαση στο αρχείο, εμποδίζοντας άλλους να το ανοίξουν.",
                            "correct": false,
                            "explanation": "Το Unix δεν κλειδώνει τα αρχεία αυτόματα (mandatory locking) με την open()."
                        },
                        {
                            "text": "Κάνει το αρχείο εκτελέσιμο (executable).",
                            "correct": false,
                            "explanation": "Για αυτό ρυθμίζουμε το mode flag (π.χ. 0755)."
                        }
                    ]
                }
            ]
        },
        "rw": {
            "title": "read/write",
            "questions": [
                {
                    "q": "Τι επιστρέφει η read() στο EOF (End Of File);",
                    "options": [
                        {
                            "text": "0.",
                            "correct": true,
                            "explanation": "Όταν δεν υπάρχουν άλλα bytes για διάβασμα, επιστρέφει 0 (όχι -1)."
                        },
                        {
                            "text": "-1.",
                            "correct": false,
                            "explanation": "Το -1 υποδεικνύει σφάλμα, όχι το τέλος του αρχείου."
                        },
                        {
                            "text": "EOF (-1 στα macro της C).",
                            "correct": false,
                            "explanation": "Η συνάρτηση fgetc() επιστρέφει EOF, αλλά η system call read() επιστρέφει πάντα 0."
                        }
                    ]
                },
                {
                    "q": "Τι κάνει η lseek(fd, 0, SEEK_END);",
                    "options": [
                        {
                            "text": "Μεταφέρει το pointer στο τέλος του αρχείου και επιστρέφει το νέο offset.",
                            "correct": true,
                            "explanation": "Επειδή το νέο offset μετράται σε bytes από την αρχή, είναι ένας γρήγορος τρόπος να βρούμε το μέγεθος του αρχείου."
                        },
                        {
                            "text": "Κλείνει το αρχείο και ελευθερώνει τον fd.",
                            "correct": false,
                            "explanation": "Αυτό το κάνει η close(fd)."
                        },
                        {
                            "text": "Διαγράφει όλα τα δεδομένα του αρχείου.",
                            "correct": false,
                            "explanation": "Η lseek() μόνο μετακινεί τον δείκτη (pointer). Δεν διαγράφει."
                        }
                    ]
                }
            ]
        },
        "dup": {
            "title": "dup/dup2",
            "questions": [
                {
                    "q": "Τι κάνει η dup2(fd, 1);",
                    "options": [
                        {
                            "text": "Κλείνει το 1 (αν είναι ανοιχτό) και το ανακατευθύνει (redirect) να δείχνει εκεί που δείχνει το fd.",
                            "correct": true,
                            "explanation": "Άρα οποιαδήποτε printf() που πάει στο 1 (stdout) θα γράφεται πλέον στο αρχείο/pipe του fd."
                        },
                        {
                            "text": "Αντιγράφει το fd στο fd table, βάζοντάς το στο μικρότερο ελεύθερο νούμερο.",
                            "correct": false,
                            "explanation": "Αυτό είναι η λειτουργία της απλής dup(fd)."
                        },
                        {
                            "text": "Στέλνει το output του fd στο 1 (stdout).",
                            "correct": false,
                            "explanation": "Αντιγράφει το target του fd στο 1, δεν διαβάζει δεδομένα."
                        }
                    ]
                },
                {
                    "q": "Τι κάνει η dup(fd);",
                    "options": [
                        {
                            "text": "Δημιουργεί ένα νέο FD στον μικρότερο διαθέσιμο αριθμό, ο οποίος δείχνει στο ίδιο αρχείο με το fd.",
                            "correct": true,
                            "explanation": "Π.χ. αν τα 0,1,2 είναι κατειλημμένα, η `dup(fd)` θα φτιάξει τον FD 3. Και οι δύο fd μοιράζονται το ίδιο file offset."
                        },
                        {
                            "text": "Διπλασιάζει τα δεδομένα του αρχείου στο δίσκο.",
                            "correct": false,
                            "explanation": "Αφορά αποκλειστικά τους file descriptors, όχι τα περιεχόμενα (bytes)."
                        },
                        {
                            "text": "Κάνει clone (fork) την τρέχουσα διεργασία.",
                            "correct": false,
                            "explanation": "Αυτό είναι η fork()."
                        }
                    ]
                }
            ]
        },
        "stat": {
            "title": "stat",
            "questions": [
                {
                    "q": "Πώς ελέγχουμε αν ένα αρχείο είναι directory μέσω της struct stat;",
                    "options": [
                        {
                            "text": "Με το macro S_ISDIR(sb.st_mode).",
                            "correct": true,
                            "explanation": "Επιστρέφει true (1) αν το αρχείο είναι κατάλογος."
                        },
                        {
                            "text": "Ελέγχοντας αν το sb.st_size είναι 0.",
                            "correct": false,
                            "explanation": "Τα directories έχουν μέγεθος > 0 (περιέχουν τα directory entries)."
                        },
                        {
                            "text": "Ελέγχοντας αν το αρχείο έχει το x (execute) permission.",
                            "correct": false,
                            "explanation": "Και τα απλά εκτελέσιμα αρχεία έχουν το x bit."
                        }
                    ]
                },
                {
                    "q": "Ποιο είναι το prefix των πεδίων της struct stat;",
                    "options": [
                        {
                            "text": "st_ (π.χ. st_size, st_mode, st_ino).",
                            "correct": true,
                            "explanation": "Είναι η σύμβαση στο Unix/POSIX API."
                        },
                        {
                            "text": "file_ (π.χ. file_size).",
                            "correct": false,
                            "explanation": "Λανθασμένο. Δεν υπάρχει τέτοιο prefix."
                        },
                        {
                            "text": "Δεν υπάρχει prefix.",
                            "correct": false,
                            "explanation": "Υπάρχει (το st_)."
                        }
                    ]
                }
            ]
        },
        "signals": {
            "title": "Signals",
            "questions": [
                {
                    "q": "Ποια σήματα ΔΕΝ μπορούν να αγνοηθούν ούτε να πιαστούν από handler;",
                    "options": [
                        {
                            "text": "Το SIGKILL (9) και το SIGSTOP (19).",
                            "correct": true,
                            "explanation": "Ο kernel εγγυάται ότι αυτά τα σήματα θα επιβληθούν (για να μπορούμε πάντα να σκοτώνουμε/παγώνουμε runaway processes)."
                        },
                        {
                            "text": "Το SIGTERM και το SIGINT.",
                            "correct": false,
                            "explanation": "Αυτά τα σήματα μπορούν να πιαστούν και να αγνοηθούν."
                        },
                        {
                            "text": "Κανένα, όλα τα σήματα μπορούν να αγνοηθούν.",
                            "correct": false,
                            "explanation": "Αν ίσχυε αυτό, τα προγράμματα θα μπορούσαν να κάνουν το σύστημα άχρηστο."
                        }
                    ]
                },
                {
                    "q": "Ποιο σήμα στέλνει το Ctrl+C;",
                    "options": [
                        {
                            "text": "Το SIGINT (Interrupt).",
                            "correct": true,
                            "explanation": "Από default τερματίζει τη διεργασία, εκτός αν η διεργασία έχει γράψει δικό της handler."
                        },
                        {
                            "text": "Το SIGKILL (Kill).",
                            "correct": false,
                            "explanation": "Το SIGKILL στέλνεται μόνο με kill -9."
                        },
                        {
                            "text": "Το SIGTSTP (Terminal Stop).",
                            "correct": false,
                            "explanation": "Αυτό στέλνεται με το Ctrl+Z."
                        }
                    ]
                },
                {
                    "q": "Τι είναι το SIGCHLD;",
                    "options": [
                        {
                            "text": "Ένα σήμα που στέλνεται στον πατέρα (parent process) όταν ένα παιδί του τερματίσει (ή σταματήσει).",
                            "correct": true,
                            "explanation": "Χρησιμοποιείται για να ξυπνήσει ο πατέρας και να καλέσει τη wait() ώστε να μαζέψει τα zombies."
                        },
                        {
                            "text": "Ένα σήμα που στέλνεται στο παιδί όταν πεθάνει ο πατέρας του.",
                            "correct": false,
                            "explanation": "Αυτό δεν συμβαίνει από default (το παιδί γίνεται απλά orphan)."
                        },
                        {
                            "text": "Το σήμα που δημιουργεί νέες διεργασίες.",
                            "correct": false,
                            "explanation": "Για αυτό χρησιμοποιούμε τη fork()."
                        }
                    ]
                },
                {
                    "q": "Τι συμβαίνει αν γράψουμε σε ένα pipe του οποίου οι readers έχουν κλείσει (no readers);",
                    "options": [
                        {
                            "text": "Η διεργασία λαμβάνει το σήμα SIGPIPE (το οποίο από default τερματίζει το πρόγραμμα).",
                            "correct": true,
                            "explanation": "Αν πιάσουμε (ή αγνοήσουμε) το SIGPIPE, τότε η write() επιστρέφει -1 με errno = EPIPE."
                        },
                        {
                            "text": "Η write() μπλοκάρει (κολλάει) μέχρι να εμφανιστεί νέος reader.",
                            "correct": false,
                            "explanation": "Αν όλοι οι readers έχουν φύγει, το pipe είναι 'νεκρό'. Δεν έχει νόημα να μπλοκάρει."
                        },
                        {
                            "text": "Τα δεδομένα χάνονται σιωπηλά (χωρίς error).",
                            "correct": false,
                            "explanation": "Το λειτουργικό σε ειδοποιεί (με σήμα και error) ότι δεν υπάρχει κανείς να διαβάσει."
                        }
                    ]
                },
                {
                    "q": "Πώς στέλνουμε ένα σήμα σε όλη την ομάδα διεργασιών (process group);",
                    "options": [
                        {
                            "text": "Δίνοντας αρνητικό PID (π.χ. kill(-PGID, signal) στην C) ή kill -SIGNAL -PGID στο bash.",
                            "correct": true,
                            "explanation": "Αν βάλουμε 0, στέλνει το σήμα στο τρέχον process group της διεργασίας."
                        },
                        {
                            "text": "Με την εντολή `killall process_group`.",
                            "correct": false,
                            "explanation": "Η killall ψάχνει με βάση το όνομα του εκτελέσιμου (string), όχι το Process Group ID (PGID)."
                        },
                        {
                            "text": "Βάζοντας asterisks (*) στο PID.",
                            "correct": false,
                            "explanation": "Η kill() δέχεται μόνο ακέραιους."
                        }
                    ]
                }
            ]
        },
        "sigaction": {
            "title": "sigaction",
            "questions": [
                {
                    "q": "Τι προσφέρει η sigaction() παραπάνω από την απλή signal();",
                    "options": [
                        {
                            "text": "Περισσότερο έλεγχο (π.χ. μπλοκάρισμα άλλων σημάτων κατά την εκτέλεση του handler) και τυποποιημένη συμπεριφορά σε όλα τα Unix.",
                            "correct": true,
                            "explanation": "Η signal() είναι απαρχαιωμένη (deprecated) και μπορεί να έχει διαφορετική συμπεριφορά σε διαφορετικά λειτουργικά."
                        },
                        {
                            "text": "Είναι πιο εύκολη (short-hand) για να αγνοήσουμε σήματα.",
                            "correct": false,
                            "explanation": "Είναι πολύ πιο πολύπλοκη (απαιτεί γέμισμα struct), αλλά είναι η σωστή μέθοδος."
                        },
                        {
                            "text": "Επιτρέπει την εγκατάσταση handler για το SIGKILL.",
                            "correct": false,
                            "explanation": "Τίποτα δεν μπορεί να πιάσει το SIGKILL."
                        }
                    ]
                },
                {
                    "q": "Ποιες functions επιτρέπεται να καλούμε μέσα σε ένα signal handler;",
                    "options": [
                        {
                            "text": "Μόνο async-signal-safe functions (όπως write(), _exit()), και ΟΧΙ printf() ή malloc().",
                            "correct": true,
                            "explanation": "Οι async-signal-safe συναρτήσεις είναι 'επανεισερχόμενες' (reentrant). Η printf() χρησιμοποιεί locks, οπότε αν κοπεί στη μέση, το πρόγραμμα θα κολλήσει (deadlock)."
                        },
                        {
                            "text": "Οποιεσδήποτε C standard library functions.",
                            "correct": false,
                            "explanation": "Οι περισσότερες C stdlib functions ΔΕΝ είναι ασφαλείς για signal handlers."
                        },
                        {
                            "text": "Μόνο τις συναρτήσεις διαχείρισης μνήμης (malloc/free).",
                            "correct": false,
                            "explanation": "Η malloc() είναι το κλασικότερο παράδειγμα μη-ασφαλούς συνάρτησης."
                        }
                    ]
                },
                {
                    "q": "Τι κάνει το flag SA_RESTART στην struct sigaction;",
                    "options": [
                        {
                            "text": "Κάνει τα system calls που διακόπηκαν (όπως read/wait) να συνεχίσουν αυτόματα αντί να αποτύχουν με EINTR.",
                            "correct": true,
                            "explanation": "Αυτό διευκολύνει πολύ την εγγραφή κώδικα, γιατί δεν χρειάζεται να γράφουμε παντού `while (read(...) == -1 && errno == EINTR)`."
                        },
                        {
                            "text": "Κάνει το πρόγραμμα να κάνει επανεκκίνηση (restart) αν κρασάρει.",
                            "correct": false,
                            "explanation": "Δεν υπάρχει flag για κάτι τέτοιο."
                        },
                        {
                            "text": "Εγκαθιστά τον handler ξανά αφού εκτελεστεί μία φορά.",
                            "correct": false,
                            "explanation": "Στη sigaction() ο handler δεν χάνεται. Παραμένει εγκατεστημένος ούτως ή άλλως."
                        }
                    ]
                },
                {
                    "q": "Τι είναι η sigprocmask();",
                    "options": [
                        {
                            "text": "Μια system call για να μπλοκάρουμε (block) την παράδοση συγκεκριμένων σημάτων προσωρινά.",
                            "correct": true,
                            "explanation": "Όσο ένα σήμα είναι μπλοκαρισμένο, μπαίνει σε 'pending' κατάσταση και παραδίδεται μόλις το ξεμπλοκάρουμε."
                        },
                        {
                            "text": "Μια συνάρτηση για να φιλτράρουμε spam διεργασίες.",
                            "correct": false,
                            "explanation": "Δεν έχει σχέση με spam."
                        },
                        {
                            "text": "Μια μάσκα δικαιωμάτων (permissions mask) για σήματα.",
                            "correct": false,
                            "explanation": "Αυτό είναι η umask() (για δημιουργία αρχείων)."
                        }
                    ]
                }
            ]
        }
    },
    "topic4": {
        "fork": {
            "title": "fork()",
            "questions": [
                {
                    "q": "Τι επιστρέφει η fork() στο παιδί;",
                    "options": [
                        {
                            "text": "0.",
                            "correct": true,
                            "explanation": "Αυτός είναι ο τρόπος για να καταλάβει το πρόγραμμα ότι εκτελείται ως παιδί και να τρέξει τον αντίστοιχο κώδικα."
                        },
                        {
                            "text": "Το PID του πατέρα.",
                            "correct": false,
                            "explanation": "Αυτό το επιστρέφει η system call `getppid()`."
                        },
                        {
                            "text": "Το PID του παιδιού.",
                            "correct": false,
                            "explanation": "Τον αριθμό αυτό τον επιστρέφει η fork(), αλλά μόνο στη διεργασία του πατέρα."
                        }
                    ]
                },
                {
                    "q": "Τι επιστρέφει η fork() στον πατέρα;",
                    "options": [
                        {
                            "text": "Το PID του παιδιού.",
                            "correct": true,
                            "explanation": "Ο πατέρας χρειάζεται αυτό το PID για να μπορεί να κάνει αργότερα wait(), kill() κλπ."
                        },
                        {
                            "text": "0.",
                            "correct": false,
                            "explanation": "Το 0 επιστρέφεται στο παιδί."
                        },
                        {
                            "text": "1.",
                            "correct": false,
                            "explanation": "Το 1 είναι το PID της init, όχι της νέας διεργασίας (εκτός κι αν είμαστε στην εκκίνηση του συστήματος)."
                        }
                    ]
                },
                {
                    "q": "Τι είναι το Copy-on-Write (COW);",
                    "options": [
                        {
                            "text": "Μηχανισμός όπου πατέρας και παιδί μοιράζονται την ίδια μνήμη μέχρι κάποιος να γράψει σε αυτή.",
                            "correct": true,
                            "explanation": "Αυτό κάνει τη fork() εξαιρετικά γρήγορη. Η μνήμη αντιγράφεται μόνο αν/όταν χρειαστεί (on write)."
                        },
                        {
                            "text": "Μια συνάρτηση για να γράφουμε σε αρχεία ταυτόχρονα.",
                            "correct": false,
                            "explanation": "Δεν έχει σχέση με τα αρχεία στο δίσκο, αφορά τη φυσική μνήμη RAM (pages)."
                        },
                        {
                            "text": "Η διαδικασία δημιουργίας backup κατά τη fork().",
                            "correct": false,
                            "explanation": "Δεν είναι backup, είναι optimization του Virtual Memory Manager."
                        }
                    ]
                }
            ]
        },
        "exec": {
            "title": "exec()",
            "questions": [
                {
                    "q": "Επιστρέφει ποτέ η exec();",
                    "options": [
                        {
                            "text": "Μόνο σε περίπτωση αποτυχίας (-1).",
                            "correct": true,
                            "explanation": "Αν πετύχει, η τρέχουσα διεργασία αντικαθίσταται πλήρως από το νέο πρόγραμμα, οπότε δεν υπάρχει επιστροφή."
                        },
                        {
                            "text": "Ναι, όταν τερματίσει το νέο πρόγραμμα.",
                            "correct": false,
                            "explanation": "Αυτό θα συνέβαινε με τη συνάρτηση system(). Η exec() αντικαθιστά το memory space, οπότε ο αρχικός κώδικας χάνεται."
                        },
                        {
                            "text": "Ναι, επιστρέφει το PID του νέου προγράμματος.",
                            "correct": false,
                            "explanation": "Η exec() ΔΕΝ δημιουργεί νέα διεργασία (κρατάει το ίδιο PID)."
                        }
                    ]
                },
                {
                    "q": "Ποια η διαφορά μεταξύ execl και execv;",
                    "options": [
                        {
                            "text": "Η execl δέχεται τα ορίσματα ως λίστα (l = list), ενώ η execv ως array (v = vector).",
                            "correct": true,
                            "explanation": "Η execl είναι βολική αν ξέρεις τον ακριβή αριθμό ορισμάτων, ενώ η execv αν έχεις φτιάξει ένα δυναμικό array από pointers."
                        },
                        {
                            "text": "Η execv τρέχει πιο γρήγορα.",
                            "correct": false,
                            "explanation": "Εσωτερικά όλες καλούν το system call execve()."
                        },
                        {
                            "text": "Η execl χρησιμοποιείται σε local files και η execv σε virtual files.",
                            "correct": false,
                            "explanation": "Δεν έχουν καμία σχέση με το filesystem."
                        }
                    ]
                },
                {
                    "q": "Τι κάνει το 'p' στο τέλος των execvp/execlp;",
                    "options": [
                        {
                            "text": "Ψάχνει το εκτελέσιμο αυτόματα στους καταλόγους του $PATH.",
                            "correct": true,
                            "explanation": "Οπότε μπορούμε να δώσουμε απλά \"ls\" αντί για \"/bin/ls\"."
                        },
                        {
                            "text": "Διατηρεί το τρέχον Process ID (PID).",
                            "correct": false,
                            "explanation": "Όλες οι παραλλαγές της exec() διατηρούν το PID."
                        },
                        {
                            "text": "Περνάει τις παραμέτρους (parameters) κρυπτογραφημένες.",
                            "correct": false,
                            "explanation": "Δεν υπάρχει τέτοια λειτουργία."
                        }
                    ]
                },
                {
                    "q": "Παραμένουν ανοιχτοί οι FDs μετά από μια exec();",
                    "options": [
                        {
                            "text": "Ναι, εκτός αν έχουν το flag FD_CLOEXEC (close-on-exec).",
                            "correct": true,
                            "explanation": "Αυτή είναι η βάση του shell redirection: η fork() κληρονομεί τα ανοιχτά αρχεία και η exec() τα διατηρεί."
                        },
                        {
                            "text": "Όχι, όλα τα αρχεία κλείνουν αυτόματα για λόγους ασφαλείας.",
                            "correct": false,
                            "explanation": "Αν έκλειναν, δεν θα δούλευε το `ls > file.txt`."
                        },
                        {
                            "text": "Παραμένουν ανοιχτά μόνο τα stdin/stdout/stderr (0,1,2).",
                            "correct": false,
                            "explanation": "Όλοι οι file descriptors (π.χ. FD 3, 4) παραμένουν ανοιχτοί (αν δεν έχουν O_CLOEXEC)."
                        }
                    ]
                }
            ]
        },
        "wait": {
            "title": "wait/waitpid",
            "questions": [
                {
                    "q": "Τι κάνει το flag WNOHANG;",
                    "options": [
                        {
                            "text": "Κάνει τη waitpid() μη-μπλοκαριστική (επιστρέφει 0 αν το παιδί τρέχει ακόμα).",
                            "correct": true,
                            "explanation": "Χρησιμοποιείται συχνά σε event loops ή signal handlers για να μαζέψουμε τα zombies χωρίς να κολλήσουμε το πρόγραμμα."
                        },
                        {
                            "text": "Αποτρέπει το πρόγραμμα από το να 'κρεμάσει' (hang) αν εμφανιστεί deadlock.",
                            "correct": false,
                            "explanation": "Δεν έχει σχέση με deadlocks."
                        },
                        {
                            "text": "Αγνοεί όλα τα σήματα κατά τη διάρκεια του wait().",
                            "correct": false,
                            "explanation": "Αυτό δεν μπορεί να γίνει με τη waitpid(), απαιτεί sigprocmask()."
                        }
                    ]
                },
                {
                    "q": "Πώς ελέγχουμε αν ένα παιδί τερμάτισε κανονικά (με exit);",
                    "options": [
                        {
                            "text": "Με το macro WIFEXITED(status).",
                            "correct": true,
                            "explanation": "Επιστρέφει true αν το παιδί τερμάτισε κάνοντας exit() ή return από τη main."
                        },
                        {
                            "text": "Με το macro WIFSIGNALED(status).",
                            "correct": false,
                            "explanation": "Αυτό επιστρέφει true αν το παιδί σκοτώθηκε βίαια από κάποιο σήμα (π.χ. SIGKILL)."
                        },
                        {
                            "text": "Ελέγχοντας αν το status είναι ίσο με 0.",
                            "correct": false,
                            "explanation": "Το status είναι ένας bit-encoded ακέραιος, δεν σημαίνει απλά επιτυχία/αποτυχία."
                        }
                    ]
                },
                {
                    "q": "Πώς παίρνουμε το exit code (0-255) ενός παιδιού;",
                    "options": [
                        {
                            "text": "Με το macro WEXITSTATUS(status).",
                            "correct": true,
                            "explanation": "Μπορούμε να το καλέσουμε ΜΟΝΟ αν το WIFEXITED(status) ήταν true."
                        },
                        {
                            "text": "Με το macro WTERMSIG(status).",
                            "correct": false,
                            "explanation": "Αυτό επιστρέφει το νούμερο του σήματος που σκότωσε το παιδί (π.χ. 9 για SIGKILL)."
                        },
                        {
                            "text": "Από την τιμή επιστροφής της waitpid().",
                            "correct": false,
                            "explanation": "Η waitpid() επιστρέφει το PID του παιδιού, όχι το exit code."
                        }
                    ]
                }
            ]
        },
        "zombie": {
            "title": "Zombie/Orphan",
            "questions": [
                {
                    "q": "Τι είναι μια zombie process;",
                    "options": [
                        {
                            "text": "Μια διεργασία που έχει τερματίσει αλλά ο πατέρας της δεν έχει κάνει wait() για αυτήν.",
                            "correct": true,
                            "explanation": "Τα μόνα resource που καταναλώνει είναι μια μικρή εγγραφή στο Process Table του kernel, ώστε ο πατέρας της να μπορεί να διαβάσει το exit code."
                        },
                        {
                            "text": "Ένα πρόγραμμα κακόβουλου λογισμικού.",
                            "correct": false,
                            "explanation": "Είναι ένας φυσιολογικός (αν και προσωρινός) κύκλος ζωής των processes."
                        },
                        {
                            "text": "Μια διεργασία που κολλάει το 100% της CPU.",
                            "correct": false,
                            "explanation": "Οι zombies είναι 'νεκρές', δεν εκτελούνται και δεν χρησιμοποιούν καθόλου CPU."
                        }
                    ]
                },
                {
                    "q": "Γιατί οι zombies είναι πρόβλημα;",
                    "options": [
                        {
                            "text": "Καταλαμβάνουν θέσεις στο Process Table. Αν γεμίσει, το σύστημα δεν μπορεί να ανοίξει νέες διεργασίες.",
                            "correct": true,
                            "explanation": "Δεν πιάνουν RAM ή CPU, αλλά πιάνουν ένα P-ID (που είναι πεπερασμένα)."
                        },
                        {
                            "text": "Τρώνε πάρα πολλή μνήμη RAM.",
                            "correct": false,
                            "explanation": "Η μνήμη τους έχει ήδη απελευθερωθεί από το λειτουργικό."
                        },
                        {
                            "text": "Ανοίγουν τυχαία αρχεία στο δίσκο.",
                            "correct": false,
                            "explanation": "Δεν εκτελούν κώδικα."
                        }
                    ]
                },
                {
                    "q": "Τι είναι μια orphan process;",
                    "options": [
                        {
                            "text": "Μια διεργασία της οποίας ο πατέρας τερμάτισε πρώτος. Την \"υιοθετεί\" ο init (PID 1).",
                            "correct": true,
                            "explanation": "Μόλις ο init υιοθετήσει το orphan, αναλαμβάνει να κάνει wait() γι' αυτό όταν πεθάνει (ώστε να μη γίνει ποτέ zombie)."
                        },
                        {
                            "text": "Μια διεργασία που δεν ανήκει σε κανένα χρήστη.",
                            "correct": false,
                            "explanation": "Κάθε process έχει user (UID), ακόμα και οι orphans."
                        },
                        {
                            "text": "Μια διεργασία που τρέχει χωρίς ανοιχτά files.",
                            "correct": false,
                            "explanation": "Δεν έχει σχέση με τα ανοιχτά αρχεία (FDs)."
                        }
                    ]
                }
            ]
        },
        "pipes": {
            "title": "Pipes",
            "questions": [
                {
                    "q": "Ποιο end του pipe είναι για διάβασμα;",
                    "options": [
                        {
                            "text": "Το p[0].",
                            "correct": true,
                            "explanation": "p[0] = Read, p[1] = Write. Το μνημονικό είναι: το 0 μοιάζει με στόμα που διαβάζει, το 1 σαν μολύβι που γράφει (ή stdin=0, stdout=1)."
                        },
                        {
                            "text": "Το p[1].",
                            "correct": false,
                            "explanation": "Το p[1] είναι η πλευρά της εγγραφής (write end)."
                        },
                        {
                            "text": "Και τα δύο.",
                            "correct": false,
                            "explanation": "Τα pipes στο Unix είναι αυστηρά μονόδρομα."
                        }
                    ]
                },
                {
                    "q": "Γιατί πρέπει να κλείνουμε το write end ενός pipe αν είμαστε readers;",
                    "options": [
                        {
                            "text": "Για να μπορέσουμε να δούμε EOF (read επιστρέφει 0) όταν κλείσει ο πραγματικός writer.",
                            "correct": true,
                            "explanation": "Η read() μπλοκάρει (κολλάει) όσο υπάρχει έστω ΚΑΙ ΕΝΑΣ writer. Αν κρατάμε εμείς ανοιχτό το write end, η δική μας read() δεν θα τερματίσει ποτέ."
                        },
                        {
                            "text": "Γιατί πιάνει πολλή μνήμη (RAM).",
                            "correct": false,
                            "explanation": "Είναι απλώς ένα file descriptor (ένας ακέραιος στο table)."
                        },
                        {
                            "text": "Για να μην διαβάσουμε κατά λάθος τα δικά μας δεδομένα.",
                            "correct": false,
                            "explanation": "Αυτό θα συνέβαινε αν ήμασταν writer, όχι reader."
                        }
                    ]
                },
                {
                    "q": "Ποια είναι η κατεύθυνση των δεδομένων σε ένα pipe;",
                    "options": [
                        {
                            "text": "Μονόδρομη (unidirectional), από το p[1] (write) προς το p[0] (read).",
                            "correct": true,
                            "explanation": "Για αμφίδρομη επικοινωνία (bidirectional) χρειαζόμαστε 2 ξεχωριστά pipes."
                        },
                        {
                            "text": "Αμφίδρομη (bidirectional), διαβάζουμε και γράφουμε και από τα δύο άκρα.",
                            "correct": false,
                            "explanation": "Μόνο τα sockets παρέχουν αμφίδρομη επικοινωνία στο ίδιο file descriptor (ή τα named pipes κάποιων άλλων OS)."
                        },
                        {
                            "text": "Τυχαία (όποιος προλάβει).",
                            "correct": false,
                            "explanation": "Δεν είναι τυχαία, λειτουργεί ως ουρά FIFO (First In First Out)."
                        }
                    ]
                }
            ]
        },
        "fifo": {
            "title": "FIFOs",
            "questions": [
                {
                    "q": "Ποια η διαφορά pipe και FIFO (named pipe);",
                    "options": [
                        {
                            "text": "Το pipe είναι ανώνυμο (μόνο συγγενείς), ενώ το FIFO έχει όνομα στο δίσκο (για οποιεσδήποτε διεργασίες).",
                            "correct": true,
                            "explanation": "Τα pipes θέλουν fork(). Το FIFO φτιάχνεται με mkfifo() και 2 άσχετα προγράμματα (π.χ. δυο διαφορετικά shell) μπορούν να επικοινωνήσουν."
                        },
                        {
                            "text": "Το FIFO είναι πιο γρήγορο.",
                            "correct": false,
                            "explanation": "Η ταχύτητα είναι πρακτικά η ίδια, εσωτερικά και τα δύο γράφουν/διαβάζουν από kernel buffers (στη μνήμη)."
                        },
                        {
                            "text": "Το pipe μπορεί να γραφτεί σε αρχείο.",
                            "correct": false,
                            "explanation": "Κανένα δεν γράφει δεδομένα στον δίσκο (παρότι το FIFO έχει entry στον δίσκο, τα data του ζουν στη μνήμη)."
                        }
                    ]
                },
                {
                    "q": "Τι συμβαίνει αν ανοίξουμε ένα FIFO για ανάγνωση (O_RDONLY);",
                    "options": [
                        {
                            "text": "Η open() μπλοκάρει (κολλάει) μέχρι κάποια άλλη διεργασία να ανοίξει το ίδιο FIFO για εγγραφή (O_WRONLY).",
                            "correct": true,
                            "explanation": "Το λειτουργικό συγχρονίζει τους readers και τους writers κατά το άνοιγμα (εκτός αν βάλουμε το flag O_NONBLOCK)."
                        },
                        {
                            "text": "Η open() επιστρέφει κανονικά και η read() διαβάζει 0 (EOF).",
                            "correct": false,
                            "explanation": "Αυτό θα συνέβαινε με ένα άδειο κανονικό αρχείο, όχι με FIFO."
                        },
                        {
                            "text": "Η open() επιστρέφει error.",
                            "correct": false,
                            "explanation": "Δεν είναι error, είναι αναμενόμενη συμπεριφορά."
                        }
                    ]
                },
                {
                    "q": "Τι επιστρέφει η open(fifo, O_WRONLY | O_NONBLOCK) αν δεν υπάρχει reader;",
                    "options": [
                        {
                            "text": "Επιστρέφει -1 με errno ENXIO.",
                            "correct": true,
                            "explanation": "Επειδή το O_NONBLOCK λέει 'μην κολλάς', αλλά δεν υπάρχει κανείς να διαβάσει, η open() αποτυγχάνει αμέσως (σε αντίθεση με την O_RDONLY | O_NONBLOCK που πετυχαίνει)."
                        },
                        {
                            "text": "Επιστρέφει ένα κανονικό fd.",
                            "correct": false,
                            "explanation": "Αυτό είναι λάθος, γιατί θα μας επέτρεπε να γράψουμε σε ένα pipe που δεν διαβάζει κανείς (που θα έστελνε SIGPIPE)."
                        },
                        {
                            "text": "Περιμένει για πάντα (μπλοκάρει).",
                            "correct": false,
                            "explanation": "Το O_NONBLOCK ακριβώς αποτρέπει αυτό."
                        }
                    ]
                }
            ]
        },
        "patterns": {
            "title": "IPC Patterns",
            "questions": [
                {
                    "q": "Πώς υλοποιείται η ανακατεύθυνση pipe σε stdout (`ls | wc`);",
                    "options": [
                        {
                            "text": "Με τη χρήση της dup2(p[1], 1) στην πρώτη διεργασία.",
                            "correct": true,
                            "explanation": "Η ls αντί να τυπώσει στην οθόνη, τυπώνει στο write-end του pipe. Στη 2η διεργασία (wc) γίνεται `dup2(p[0], 0)` για να διαβάζει από το pipe."
                        },
                        {
                            "text": "Με τη χρήση της open().",
                            "correct": false,
                            "explanation": "Η open() δουλεύει σε αρχεία, το pipe είναι ανώνυμο in-memory κανάλι."
                        },
                        {
                            "text": "Η ls καλεί τη write() απευθείας στο p[1].",
                            "correct": false,
                            "explanation": "Η ls γράφει στο FD 1 (stdout) γιατί αγνοεί ότι υπάρχει pipe! Γι' αυτό χρειάζεται το dup2."
                        }
                    ]
                },
                {
                    "q": "Πώς μαζεύουμε zombies ασύγχρονα (asynchronously);",
                    "options": [
                        {
                            "text": "Εγκαθιστώντας έναν SIGCHLD handler που καλεί τη waitpid σε loop με WNOHANG.",
                            "correct": true,
                            "explanation": "Το loop `while (waitpid(-1, NULL, WNOHANG) > 0)` μαζεύει ΟΛΑ τα παιδιά που τερμάτισαν ταυτόχρονα, πριν επιστρέψει ο handler."
                        },
                        {
                            "text": "Καλώντας wait(NULL) μέσα στη main().",
                            "correct": false,
                            "explanation": "Αυτό είναι σύγχρονο (blocking) και σταματάει την εκτέλεση του υπόλοιπου προγράμματος."
                        },
                        {
                            "text": "Το λειτουργικό τα μαζεύει αυτόματα.",
                            "correct": false,
                            "explanation": "Ο kernel ποτέ δεν καθαρίζει τα zombies (εκτός αν ο πατέρας τερματίσει και τα υιοθετήσει ο init)."
                        }
                    ]
                }
            ]
        }
    },
    "topic5": {
        "intro": {
            "title": "Cross-host IPC",
            "questions": [
                {
                    "q": "Ποια είναι η βασική διαφορά του Peer-to-Peer (P2P) από το Client-Server μοντέλο;",
                    "options": [
                        {"text": "Στο P2P κάθε κόμβος είναι ταυτόχρονα και client και server.", "correct": true, "explanation": "Οι κόμβοι είναι ισότιμοι και δεν υπάρχει κεντρικός (always-on) server."},
                        {"text": "Το P2P χρησιμοποιείται μόνο για μεταφορά αρχείων, όχι για μηνύματα.", "correct": false, "explanation": "Μπορεί να χρησιμοποιηθεί για τα πάντα (π.χ. Skype voice calls)."},
                        {"text": "Το P2P απαιτεί στατική IP για όλους τους κόμβους.", "correct": false, "explanation": "Συνήθως οι P2P clients έχουν dynamic IPs."}
                    ]
                },
                {
                    "q": "Τι είναι ένα Socket;",
                    "options": [
                        {"text": "Μια διεπαφή (API) - 'πόρτα' επικοινωνίας μεταξύ του application layer και του transport layer.", "correct": true, "explanation": "Το OS παρέχει αυτή την 'πόρτα' για να στέλνουμε/λαμβάνουμε δεδομένα μέσω δικτύου."},
                        {"text": "Μια φυσική θύρα στο πίσω μέρος του υπολογιστή.", "correct": false, "explanation": "Αυτό είναι το hardware port (π.χ. Ethernet port)."},
                        {"text": "Ένα πρωτόκολλο δρομολόγησης πακέτων.", "correct": false, "explanation": "Η δρομολόγηση γίνεται από το IP πρωτόκολλο, το socket είναι απλά το endpoint API."}
                    ]
                },
                {
                    "q": "Τι ρόλο παίζει το Application Protocol (π.χ. HTTP);",
                    "options": [
                        {"text": "Ορίζει τους κανόνες, τη σύνταξη και τη σημασιολογία των μηνυμάτων (requests/responses).", "correct": true, "explanation": "Λέει στο πρόγραμμα πώς να ερμηνεύσει τα bytes που έρχονται από το socket."},
                        {"text": "Ορίζει τον τρόπο που τα πακέτα μεταφέρονται αξιόπιστα στο δίκτυο.", "correct": false, "explanation": "Αυτό είναι δουλειά του Transport Layer (TCP)."},
                        {"text": "Παρέχει την IP διεύθυνση του server.", "correct": false, "explanation": "Αυτό γίνεται από το DNS."}
                    ]
                }
            ]
        },
        "addressing": {
            "title": "IP & Ports",
            "questions": [
                {
                    "q": "Τι προσδιορίζει η διεύθυνση IP και τι το Port;",
                    "options": [
                        {"text": "Η IP βρίσκει το μηχάνημα στο δίκτυο, το Port βρίσκει τη συγκεκριμένη διεργασία στο μηχάνημα.", "correct": true, "explanation": "Σαν τη διεύθυνση ενός κτιρίου (IP) και τον αριθμό διαμερίσματος (Port)."},
                        {"text": "Η IP είναι για εσωτερικό δίκτυο (LAN), το Port για το Internet.", "correct": false, "explanation": "Η IP (v4/v6) χρησιμοποιείται και στα δύο."},
                        {"text": "Το Port βρίσκει το μηχάνημα, η IP τη διεργασία.", "correct": false, "explanation": "Ισχύει το ακριβώς αντίστροφο."}
                    ]
                },
                {
                    "q": "Τι είναι τα 'Well-known ports' (0-1023);",
                    "options": [
                        {"text": "Θύρες δεσμευμένες για γνωστές υπηρεσίες (π.χ. 80 για HTTP) που απαιτούν δικαιώματα root για να κάνεις bind().", "correct": true, "explanation": "Αυστηρός κανόνας του Unix/Linux για ασφάλεια."},
                        {"text": "Προσωρινές θύρες που δίνει αυτόματα το λειτουργικό στους clients.", "correct": false, "explanation": "Αυτές οι θύρες ονομάζονται ephemeral ports (συνήθως στο range 49152–65535)."},
                        {"text": "Θύρες που χρησιμοποιούνται αποκλειστικά για UDP.", "correct": false, "explanation": "Υπάρχουν well-known ports και για TCP και για UDP."}
                    ]
                },
                {
                    "q": "Τι ρόλο παίζει το NAT (Network Address Translation);",
                    "options": [
                        {"text": "Επιτρέπει σε πολλές εσωτερικές συσκευές (LAN) να μοιράζονται μία κοινή δημόσια IP.", "correct": true, "explanation": "Ο router κρατάει ένα table για να ξέρει ποιο επιστρεφόμενο πακέτο πάει σε ποια συσκευή."},
                        {"text": "Μεταφράζει τα hostnames (όπως google.com) σε IP διευθύνσεις.", "correct": false, "explanation": "Αυτό είναι το DNS."},
                        {"text": "Κρυπτογραφεί τα δεδομένα του δικτύου.", "correct": false, "explanation": "Αυτό το κάνουν πρωτόκολλα όπως το TLS/SSL."}
                    ]
                }
            ]
        },
        "transport": {
            "title": "TCP vs UDP",
            "questions": [
                {
                    "q": "Ποιο είναι το κύριο χαρακτηριστικό του TCP (SOCK_STREAM);",
                    "options": [
                        {"text": "Είναι connection-oriented (handshake) και εγγυάται αξιόπιστη, in-order παράδοση.", "correct": true, "explanation": "Ιδανικό για Web, Email, File transfers όπου κάθε byte μετράει."},
                        {"text": "Στέλνει πακέτα γρήγορα χωρίς εγκατάσταση σύνδεσης.", "correct": false, "explanation": "Αυτό είναι το UDP."},
                        {"text": "Είναι ιδανικό για video streaming και online gaming.", "correct": false, "explanation": "Σε αυτές τις περιπτώσεις το UDP είναι προτιμότερο λόγω χαμηλού latency."}
                    ]
                },
                {
                    "q": "Τι εννοούμε λέγοντας ότι το TCP δεν έχει 'Message Boundaries';",
                    "options": [
                        {"text": "Είναι byte stream. Το read() μπορεί να διαβάσει λιγότερα (ή περισσότερα) bytes από όσα στάλθηκαν σε ένα write().", "correct": true, "explanation": "Δεν διατηρούνται τα όρια των μηνυμάτων. Πρέπει να ελέγχετε το return value της read()."},
                        {"text": "Δεν μπορείς να ξέρεις ποιος έστειλε το μήνυμα.", "correct": false, "explanation": "Η σύνδεση (socket pair) είναι αυστηρά ορισμένη (Source IP/Port + Dest IP/Port)."},
                        {"text": "Το μέγεθος του μηνύματος είναι άπειρο.", "correct": false, "explanation": "Αν και το stream είναι συνεχές, τα μηνύματα είναι πεπερασμένα."}
                    ]
                },
                {
                    "q": "Πότε θα επιλέγαμε UDP αντί για TCP;",
                    "options": [
                        {"text": "Όταν η χαμηλή καθυστέρηση (latency) είναι πιο σημαντική από την απώλεια μερικών δεδομένων (π.χ. VoIP).", "correct": true, "explanation": "Στο UDP δεν περιμένεις για ACKs ή retransmissions, το πακέτο φεύγει αμέσως."},
                        {"text": "Όταν κατεβάζουμε ένα αρχείο από FTP server.", "correct": false, "explanation": "Αν χαθεί ένα πακέτο στο αρχείο θα καταστραφεί. Θέλει TCP."},
                        {"text": "Όταν θέλουμε κρυπτογράφηση.", "correct": false, "explanation": "Η κρυπτογράφηση είναι ανεξάρτητη του TCP/UDP."}
                    ]
                }
            ]
        },
        "concepts": {
            "title": "Socket Concepts",
            "questions": [
                {
                    "q": "Τι καθορίζει η παράμετρος 'domain' (π.χ. AF_INET) στην socket();",
                    "options": [
                        {"text": "Το format των διευθύνσεων που θα χρησιμοποιηθεί (π.χ. IPv4, IPv6, Unix Path).", "correct": true, "explanation": "AF_INET σημαίνει IPv4 (Internet domain), AF_UNIX σημαίνει τοπική επικοινωνία στο filesystem."},
                        {"text": "Αν η σύνδεση είναι TCP ή UDP.", "correct": false, "explanation": "Αυτό το καθορίζει η παράμετρος 'type' (SOCK_STREAM vs SOCK_DGRAM)."},
                        {"text": "Το πρωτόκολλο εφαρμογής (π.χ. HTTP).", "correct": false, "explanation": "Τα sockets δεν γνωρίζουν για application protocols."}
                    ]
                },
                {
                    "q": "Τι επιστρέφει η συνάρτηση socket();",
                    "options": [
                        {"text": "Έναν File Descriptor (ακέραιο) ή -1 σε περίπτωση σφάλματος.", "correct": true, "explanation": "Όπως ακριβώς και η open() για τα αρχεία."},
                        {"text": "Μια δομή sockaddr.", "correct": false, "explanation": "Η δομή πρέπει να οριστεί και να περαστεί στην bind()."},
                        {"text": "0 σε επιτυχία.", "correct": false, "explanation": "Επιστρέφει το νέο fd (π.χ. 3, 4, ...). Το 0 είναι ήδη το stdin."}
                    ]
                },
                {
                    "q": "Τι είναι το AF_UNIX (ή AF_LOCAL) domain;",
                    "options": [
                        {"text": "Χρησιμοποιείται για επικοινωνία διεργασιών στο ίδιο ακριβώς μηχάνημα, αποφεύγοντας το overhead του network stack.", "correct": true, "explanation": "Η διεύθυνσή τους είναι ένα path στο filesystem, όχι IP."},
                        {"text": "Είναι ένα πρωτόκολλο που δουλεύει μόνο σε λειτουργικά συστήματα Unix.", "correct": false, "explanation": "Αν και το όνομα AF_UNIX ξεκίνησε έτσι, παρόμοια concepts υπάρχουν παντού (π.χ. Windows Named Pipes)."},
                        {"text": "Είναι η προεπιλογή (default) για επικοινωνία στο internet.", "correct": false, "explanation": "Αυτό είναι το AF_INET."}
                    ]
                }
            ]
        },
        "byteorder": {
            "title": "Network Byte Order",
            "questions": [
                {
                    "q": "Τι είναι το Network Byte Order;",
                    "options": [
                        {"text": "Είναι Big Endian (το πιο σημαντικό byte αποστέλλεται πρώτο).", "correct": true, "explanation": "Όλα τα δεδομένα που μπαίνουν σε δομές διευθύνσεων (π.χ. ports/IPs) πρέπει να μετατρέπονται σε Network Byte Order."},
                        {"text": "Είναι Little Endian (το λιγότερο σημαντικό byte πρώτο).", "correct": false, "explanation": "Οι Intel x86 επεξεργαστές είναι Little Endian, αλλά το δίκτυο είναι Big Endian."},
                        {"text": "Εξαρτάται από το λειτουργικό σύστημα του server.", "correct": false, "explanation": "Είναι universal standard για το internet."}
                    ]
                },
                {
                    "q": "Ποια συνάρτηση μετατρέπει ένα 16-bit Port από Host σε Network byte order;",
                    "options": [
                        {"text": "htons()", "correct": true, "explanation": "Mnemonic: Host TO Network Short. (Short = 16-bit, κατάλληλο για ports)."},
                        {"text": "htonl()", "correct": false, "explanation": "Αυτό είναι Long (32-bit), κατάλληλο για IP διευθύνσεις."},
                        {"text": "ntohs()", "correct": false, "explanation": "Αυτό κάνει την αντίστροφη μετατροπή (Network TO Host Short) όταν ΛΑΜΒΑΝΟΥΜΕ δεδομένα."}
                    ]
                },
                {
                    "q": "Τι θα συμβεί αν δεν χρησιμοποιήσουμε htons() κατά το bind σε Intel CPU;",
                    "options": [
                        {"text": "Ο server θα κάνει bind σε εντελώς διαφορετικό (λάθος) port.", "correct": true, "explanation": "Το port 8080 (0x1F90) θα διαβαστεί ανάποδα από το OS ως 36895 (0x901F)."},
                        {"text": "Το πρόγραμμα δεν θα γίνει compile.", "correct": false, "explanation": "Ο compiler δεν ελέγχει το byte ordering της εφαρμογής σας."},
                        {"text": "Θα λειτουργήσει κανονικά γιατί ο kernel κάνει τη μετατροπή αυτόματα.", "correct": false, "explanation": "Ο kernel περιμένει NBO. Εσύ πρέπει να το μετατρέψεις."}
                    ]
                }
            ]
        },
        "sockaddr": {
            "title": "sockaddr_in",
            "questions": [
                {
                    "q": "Ποια διεύθυνση αντιστοιχεί στο INADDR_ANY;",
                    "options": [
                        {"text": "Στο 0.0.0.0, που σημαίνει 'δέξου συνδέσεις σε όλα τα network interfaces του μηχανήματος'.", "correct": true, "explanation": "Ο πιο συνηθισμένος τρόπος για να ρυθμίσεις έναν server χωρίς να σκληροκωδικοποιήσεις τη δική του IP."},
                        {"text": "Στη διεύθυνση loopback 127.0.0.1.", "correct": false, "explanation": "Αυτό θα ήταν το INADDR_LOOPBACK."},
                        {"text": "Στην IP του πελάτη (client).", "correct": false, "explanation": "Ο server δεν ξέρει την IP του client κατά τη διάρκεια του bind()."}
                    ]
                },
                {
                    "q": "Γιατί κάνουμε cast τον δείκτη &server_addr σε (struct sockaddr *) κατά την bind();",
                    "options": [
                        {"text": "Διότι η bind() παίρνει έναν generic δείκτη, ώστε να δουλεύει και για AF_INET, AF_INET6, AF_UNIX.", "correct": true, "explanation": "Σαν polymorphism στη C. Η struct sockaddr είναι ο 'γονέας' και η struct sockaddr_in το 'παιδί'."},
                        {"text": "Για να αποφύγουμε compilation errors λόγω Network Byte Order.", "correct": false, "explanation": "Δεν έχει σχέση με το byte order."},
                        {"text": "Για να διαγράψουμε (free) τη μνήμη της δομής.", "correct": false, "explanation": "Δεν γίνεται καμία διαγραφή."}
                    ]
                },
                {
                    "q": "Ποιες είναι οι βασικές μεταβλητές της `struct sockaddr_in`;",
                    "options": [
                        {"text": "sin_family (domain), sin_port (NBO), sin_addr (IP NBO).", "correct": true, "explanation": "Αυτά τα 3 πεδία πρέπει απαραιτήτως να τα γεμίσουμε πριν κάνουμε bind ή connect."},
                        {"text": "s_addr, h_name, h_length.", "correct": false, "explanation": "Τα δύο τελευταία ανήκουν στην struct hostent (DNS)."},
                        {"text": "fd, ip_address, port.", "correct": false, "explanation": "Δεν υπάρχουν τέτοια ονόματα πεδίων στη C."}
                    ]
                }
            ]
        },
        "dns": {
            "title": "DNS & IP Conversion",
            "questions": [
                {
                    "q": "Τι κάνει η gethostbyname();",
                    "options": [
                        {"text": "Παίρνει ένα hostname (π.χ. 'google.com') και επιστρέφει μια struct hostent με τις IP του.", "correct": true, "explanation": "Αν και deprecated υπέρ της getaddrinfo(), είναι η κλασική μέθοδος επίλυσης (DNS lookup)."},
                        {"text": "Παίρνει μια IP (π.χ. '8.8.8.8') και επιστρέφει το όνομα (reverse DNS).", "correct": false, "explanation": "Αυτό το κάνει η gethostbyaddr()."},
                        {"text": "Μετατρέπει IP από string σε binary form.", "correct": false, "explanation": "Αυτό το κάνει η inet_aton() / inet_pton()."}
                    ]
                },
                {
                    "q": "Ποια είναι η λειτουργία της inet_ntoa();",
                    "options": [
                        {"text": "Μετατρέπει μια διεύθυνση IP από binary (Network Byte Order) σε printable string (π.χ. '192.168.1.1').", "correct": true, "explanation": "Το ntoa σημαίνει 'Network To ASCII'."},
                        {"text": "Μετατρέπει ένα ASCII string IP σε Network Byte Order.", "correct": false, "explanation": "Αυτό το κάνει η inet_aton() (ASCII To Network)."},
                        {"text": "Επικοινωνεί με τον DNS server.", "correct": false, "explanation": "Καμία δικτυακή επικοινωνία δεν γίνεται εδώ. Είναι καθαρά string conversion."}
                    ]
                },
                {
                    "q": "Γιατί οι inet_ntoa() και gethostbyname() θεωρούνται 'επικίνδυνες' σε σύγχρονο multithreaded κώδικα;",
                    "options": [
                        {"text": "Επειδή επιστρέφουν δείκτες (pointers) σε static memory buffers (NOT thread-safe).", "correct": true, "explanation": "Αν δύο threads καλέσουν ταυτόχρονα την inet_ntoa, η μία κλήση θα διαγράψει (overwrite) τα αποτελέσματα της άλλης."},
                        {"text": "Επειδή είναι πολύ αργές (υψηλό overhead).", "correct": false, "explanation": "Δεν είναι θέμα ταχύτητας, είναι θέμα data race."},
                        {"text": "Επειδή δεν υποστηρίζουν IPv4.", "correct": false, "explanation": "Ίσα-ίσα, υποστηρίζουν ΜΟΝΟ IPv4."}
                    ]
                }
            ]
        },
        "tcp-server": {
            "title": "TCP Server Lifecycle",
            "questions": [
                {
                    "q": "Ποια είναι η σωστή σειρά κλήσεων για την εκκίνηση ενός TCP Server;",
                    "options": [
                        {"text": "socket() → bind() → listen() → accept()", "correct": true, "explanation": "Δημιουργία -> Κατοχύρωση Port -> Ορισμός ουράς (passive) -> Αναμονή συνδέσεων."},
                        {"text": "socket() → connect() → read()", "correct": false, "explanation": "Αυτή είναι η σειρά του Client."},
                        {"text": "socket() → listen() → bind() → accept()", "correct": false, "explanation": "Δεν μπορείς να κάνεις listen αν δεν έχεις κάνει πρώτα bind."}
                    ]
                },
                {
                    "q": "Τι επιστρέφει η accept() όταν πετύχει;",
                    "options": [
                        {"text": "Έναν ΝΕΟ file descriptor, ο οποίος χρησιμοποιείται αποκλειστικά για την επικοινωνία με τον συγκεκριμένο client.", "correct": true, "explanation": "Το αρχικό socket (listening socket) μένει άθικτο και συνεχίζει να δέχεται νέες συνδέσεις."},
                        {"text": "Την IP διεύθυνση του client.", "correct": false, "explanation": "Την IP τη γράφει στο struct sockaddr που περνάμε ως 2ο argument, δεν την επιστρέφει."},
                        {"text": "0 σε επιτυχία.", "correct": false, "explanation": "Επιστρέφει file descriptor (θετικό ακέραιο)."}
                    ]
                },
                {
                    "q": "Τι αντιπροσωπεύει η δεύτερη παράμετρος (backlog) στην listen(sock, 5);",
                    "options": [
                        {"text": "Τον μέγιστο αριθμό ολοκληρωμένων συνδέσεων που μπορούν να περιμένουν στην ουρά, πριν κάνουμε accept.", "correct": true, "explanation": "Αν η ουρά γεμίσει (π.χ. > 5 συνδέσεις περιμένουν), το OS θα απορρίψει τα νέα connections."},
                        {"text": "Τον μέγιστο αριθμό clients που μπορεί να εξυπηρετήσει συνολικά ο server.", "correct": false, "explanation": "Μπορούμε να εξυπηρετήσουμε χιλιάδες. Το backlog είναι μόνο για αυτούς που περιμένουν να γίνουν 'accept'."},
                        {"text": "Το μέγεθος του buffer σε bytes για εισερχόμενα μηνύματα.", "correct": false, "explanation": "Το μέγεθος buffer ορίζεται σε άλλο επίπεδο, π.χ. via setsockopt."}
                    ]
                }
            ]
        },
        "tcp-client": {
            "title": "TCP Client Lifecycle",
            "questions": [
                {
                    "q": "Γιατί ένας TCP Client δεν χρειάζεται να καλέσει την bind();",
                    "options": [
                        {"text": "Το OS αναθέτει αυτόματα ένα ελεύθερο (ephemeral) port κατά την κλήση της connect().", "correct": true, "explanation": "Δεν μας ενδιαφέρει ποιο port έχει ο client. Μας ενδιαφέρει ο server να είναι σε γνωστό port (π.χ. 80)."},
                        {"text": "Ο client δεν έχει port.", "correct": false, "explanation": "Κάθε επικοινωνία TCP θέλει ένα ζεύγος IP:Port και στις δύο πλευρές (4-tuple)."},
                        {"text": "Επειδή το bind() απαγορεύεται στους clients.", "correct": false, "explanation": "Μπορείς να κάνεις bind (π.χ. αν θέλεις να βγεις από συγκεκριμένη IP/κάρτα δικτύου), αλλά σπάνια χρειάζεται."}
                    ]
                },
                {
                    "q": "Τι κάνει η connect() σε ένα SOCK_STREAM socket;",
                    "options": [
                        {"text": "Ξεκινάει το TCP 3-way handshake με τον server. Μπλοκάρει (κολλάει) μέχρι να ολοκληρωθεί.", "correct": true, "explanation": "Μόλις επιστρέψει 0, η σύνδεση είναι Established και μπορούμε να στείλουμε δεδομένα."},
                        {"text": "Στέλνει αμέσως τα δεδομένα της read/write.", "correct": false, "explanation": "Η connect() απλά ανοίγει το κανάλι (στήνει σύνδεση)."},
                        {"text": "Απορρίπτει (κλείνει) τη σύνδεση.", "correct": false, "explanation": "Αυτό το κάνει η close()."}
                    ]
                },
                {
                    "q": "Ποια είναι η διαφορά shutdown(fd, SHUT_WR) και close(fd);",
                    "options": [
                        {"text": "To shutdown(SHUT_WR) στέλνει FIN (λέει στον server 'τέλος') αλλά το fd μένει ανοιχτό για να ΛΑΒΕΙΣ απάντηση.", "correct": true, "explanation": "Κλασικό pattern στο HTTP: Στέλνεις request, κάνεις SHUT_WR, ο server καταλαβαίνει ότι τελείωσες και σου στέλνει την απάντηση."},
                        {"text": "Δεν υπάρχει διαφορά, είναι συνώνυμα.", "correct": false, "explanation": "Το close(fd) καταστρέφει το fd αμέσως (αν το ref count είναι 0)."},
                        {"text": "To shutdown τερματίζει εντελώς τη διεργασία.", "correct": false, "explanation": "Τερματίζει μόνο το μισό (ή όλο) το κανάλι του TCP, όχι τη διεργασία."}
                    ]
                }
            ]
        },
        "arch": {
            "title": "Server Architectures",
            "questions": [
                {
                    "q": "Τι είναι ένας Iterative (Serial) Server;",
                    "options": [
                        {"text": "Εξυπηρετεί έναν client από την αρχή μέχρι το τέλος, ΠΡΙΝ κάνει accept τον επόμενο.", "correct": true, "explanation": "Αν ένας client είναι αργός ή κολλήσει, όλοι οι υπόλοιποι στην ουρά 'περιμένουν'."},
                        {"text": "Δημιουργεί μια νέα διεργασία (fork) για κάθε client.", "correct": false, "explanation": "Αυτό είναι ο Concurrent (Forking) server."},
                        {"text": "Διαχειρίζεται πολλαπλούς clients με ένα thread χρησιμοποιώντας select().", "correct": false, "explanation": "Αυτό είναι ο Multiplexing (event-driven) server."}
                    ]
                },
                {
                    "q": "Σε έναν Concurrent (Forking) Server, γιατί ο parent ΠΡΕΠΕΙ να κάνει close(cfd) αμέσως μετά τη fork;",
                    "options": [
                        {"text": "Για να μειώσει το reference count του cfd. Αλλιώς, όταν το παιδί τελειώσει, το socket δεν θα κλείσει (το κρατάει ο πατέρας).", "correct": true, "explanation": "Αυτό θα οδηγήσει σε εξάντληση των file descriptors (FD leak)."},
                        {"text": "Επειδή το socket cfd ανήκει μόνο στο παιδί.", "correct": false, "explanation": "Η fork() αντιγράφει (κλωνοποιεί) τα πάντα. Το fd είναι ανοιχτό ΚΑΙ στους δύο."},
                        {"text": "Για να στείλει EOF στον client.", "correct": false, "explanation": "EOF θα σταλεί όταν το κλείσει ΚΑΙ το παιδί (όταν τελειώσει τη δουλειά του)."}
                    ]
                },
                {
                    "q": "Γιατί χρειαζόμαστε handler για το SIGCHLD σε έναν Concurrent (Forking) Server;",
                    "options": [
                        {"text": "Για να τρέξει τη waitpid() με WNOHANG και να μαζέψει τα 'zombie' children όταν αυτά τερματίσουν.", "correct": true, "explanation": "Αν δεν το κάνουμε, ο server θα γεμίσει το Process Table με zombies σε κάθε disconnect πελάτη."},
                        {"text": "Για να τερματίσει τον server όταν δεν υπάρχουν άλλοι clients.", "correct": false, "explanation": "Ο server δεν πρέπει να τερματίζει ποτέ."},
                        {"text": "Για να κλείσει αυτόματα τα connections (close).", "correct": false, "explanation": "Το close γίνεται κανονικά στον κώδικα, το waitpid() καθαρίζει τα process structures."}
                    ]
                }
            ]
        },
        "select": {
            "title": "I/O Multiplexing (select)",
            "questions": [
                {
                    "q": "Τι πρόβλημα λύνει η συνάρτηση select();",
                    "options": [
                        {"text": "Επιτρέπει σε ΜΙΑ διεργασία να 'ακούει' (παρακολουθεί) πολλά file descriptors ταυτόχρονα, χωρίς να μπλοκάρει σε κανένα συγκεκριμένα.", "correct": true, "explanation": "Η select() κοιμάται μέχρι έστω ΕΝΑ από τα FDs του συνόλου (fd_set) να έχει δεδομένα για διάβασμα (ή σύνδεση)."},
                        {"text": "Επιτρέπει στον server να επιλέξει αυτόματα ένα ελεύθερο port.", "correct": false, "explanation": "Αυτό γίνεται βάζοντας sin_port = 0 στην bind()."},
                        {"text": "Μειώνει την καθυστέρηση του δικτύου (latency).", "correct": false, "explanation": "Δεν επηρεάζει την ταχύτητα μεταφοράς."}
                    ]
                },
                {
                    "q": "Τι σημαίνει αν, μετά την επιστροφή της select(), η FD_ISSET() βρει ότι το *listening socket* είναι ready;",
                    "options": [
                        {"text": "Σημαίνει ότι ένας νέος client βρίσκεται στην ουρά, έτοιμος για να του κάνουμε accept().", "correct": true, "explanation": "Η select 'ξυπνάει' το lfd όταν υπάρχει νέο connection request."},
                        {"text": "Σημαίνει ότι ένας υπάρχων client έστειλε νέα δεδομένα.", "correct": false, "explanation": "Αυτό θα φαινόταν αν γινόταν ready κάποιο από τα *connected sockets* (cfd)."},
                        {"text": "Σημαίνει ότι ο server πρέπει να κλείσει.", "correct": false, "explanation": "Δεν σημαίνει σφάλμα, είναι η κανονική λειτουργία αποδοχής συνδέσεων."}
                    ]
                },
                {
                    "q": "Ποια είναι η παγίδα με την 1η παράμετρο της select(nfds, ...);",
                    "options": [
                        {"text": "Δεν είναι το ΠΛΗΘΟΣ των FDs. Είναι η υψηλότερη τιμή (the highest file descriptor number) + 1.", "correct": true, "explanation": "Π.χ. αν παρακολουθείς τα fds 3 και 5, πρέπει να περάσεις το 6."},
                        {"text": "Πρέπει να είναι πάντα αρνητικός αριθμός.", "correct": false, "explanation": "Είναι πάντα θετικός ακέραιος."},
                        {"text": "Ορίζει το timeout της select.", "correct": false, "explanation": "Το timeout περνιέται ως ξεχωριστός pointer σε `struct timeval` στην 5η παράμετρο."}
                    ]
                }
            ]
        },
        "udp": {
            "title": "UDP API",
            "questions": [
                {
                    "q": "Ποιες συναρτήσεις απουσιάζουν από τον κύκλο ζωής ενός UDP Server (σε σχέση με το TCP);",
                    "options": [
                        {"text": "Οι listen() και accept().", "correct": true, "explanation": "Ο UDP server κάνει απλά socket() -> bind() -> recvfrom(). Δεν κρατάει ουρά, δεν στήνει 'συνδέσεις'."},
                        {"text": "Οι socket() και bind().", "correct": false, "explanation": "Η socket() χρειάζεται πάντα, και η bind() χρειάζεται στον server για να πάρει συγκεκριμένο port."},
                        {"text": "Η close().", "correct": false, "explanation": "Πάντα κλείνουμε τα FDs μας όταν τελειώνουμε."}
                    ]
                },
                {
                    "q": "Γιατί στο UDP χρησιμοποιούμε sendto() και recvfrom() αντί για απλή write()/read();",
                    "options": [
                        {"text": "Γιατί δεν υπάρχει 'σύνδεση'. Η recvfrom() μας λέει ΠΟΙΟΣ έστειλε το πακέτο, ώστε να του απαντήσουμε με sendto().", "correct": true, "explanation": "Στο TCP ο cfd ξέρει σε ποιον είναι συνδεδεμένος. Στο UDP, κάθε πακέτο στο sfd μπορεί να προέρχεται από άλλον."},
                        {"text": "Επειδή το UDP είναι γρηγορότερο.", "correct": false, "explanation": "Τα syscalls δεν κάνουν το UDP γρήγορο, η απουσία handshake/ACKs το κάνει."},
                        {"text": "Επειδή το UDP υποστηρίζει μόνο IPv6.", "correct": false, "explanation": "Υποστηρίζει και v4 και v6."}
                    ]
                },
                {
                    "q": "Τι θα συμβεί αν σε UDP κλήση recvfrom() χαθεί το πακέτο στο δίκτυο;",
                    "options": [
                        {"text": "Η recvfrom() θα μπλοκάρει (κολλήσει) για πάντα, περιμένοντας πακέτο που δεν θα έρθει ποτέ.", "correct": true, "explanation": "Το UDP ΔΕΝ έχει timeout ή retransmissions από μόνο του. Εσύ πρέπει να βάλεις timeout (π.χ. με select() ή setsockopt)."},
                        {"text": "Ο TCP/IP stack θα ξαναζητήσει το πακέτο αυτόματα.", "correct": false, "explanation": "Στο UDP δεν υπάρχει TCP/IP stack ελέγχου."},
                        {"text": "Θα επιστρέψει αμέσως με error -1.", "correct": false, "explanation": "Το OS δεν ξέρει ότι έπρεπε να έρθει πακέτο, άρα απλά περιμένει."}
                    ]
                }
            ]
        },
        "pitfalls": {
            "title": "Pitfalls & Common Bugs",
            "questions": [
                {
                    "q": "Τι είναι το TIME_WAIT state και γιατί χρειαζόμαστε το SO_REUSEADDR;",
                    "options": [
                        {"text": "Το OS 'κλειδώνει' το port για 2-4 λεπτά μετά το κλείσιμο. Το SO_REUSEADDR επιτρέπει στον server να ξανακάνει bind αμέσως (π.χ. μετά από restart/crash).", "correct": true, "explanation": "Χωρίς αυτό, παίρνεις το 'Address already in use' error κάθε φορά που κλείνεις και ανοίγεις το πρόγραμμα."},
                        {"text": "Είναι ένα sleep() του λειτουργικού. Το SO_REUSEADDR το κάνει πιο γρήγορο.", "correct": false, "explanation": "Είναι μηχανισμός ασφαλείας του TCP για να 'απορροφήσει' καθυστερημένα πακέτα."},
                        {"text": "Επιτρέπει σε πολλούς servers να μοιράζονται την ίδια IP.", "correct": false, "explanation": "Επιτρέπει την επαναχρησιμοποίηση του Port στο χρόνο, όχι τον διαμοιρασμό."}
                    ]
                },
                {
                    "q": "Τι συμβαίνει όταν κάνεις write() σε ένα TCP socket που ο Client έχει κλείσει βίαια;",
                    "options": [
                        {"text": "Το OS στέλνει το σήμα SIGPIPE στη διεργασία, το οποίο από default ΤΕΡΜΑΤΙΖΕΙ τον server σιωπηλά (χωρίς error print).", "correct": true, "explanation": "Λύση: signal(SIGPIPE, SIG_IGN). Μετά η write() απλά θα επιστρέψει -1 (EPIPE)."},
                        {"text": "Η write() μπλοκάρει (κολλάει) μέχρι να ξανασυνδεθεί ο client.", "correct": false, "explanation": "Ο client δεν μπορεί να 'ξανασυνδεθεί' στο ίδιο stream."},
                        {"text": "Η write() πετυχαίνει κανονικά (επιστρέφει bytes), απλά χάνονται τα δεδομένα.", "correct": false, "explanation": "Το OS ξέρει ότι η σύνδεση κόπηκε (έλαβε RST ή TCP Keepalive timeout) και ειδοποιεί."}
                    ]
                },
                {
                    "q": "Γιατί πρέπει να βάζουμε τη read/write μέσα σε loop (π.χ. write_all);",
                    "options": [
                        {"text": "Διότι στο TCP (Byte Stream) δεν υπάρχει εγγύηση ότι μια κλήση θα διαβάσει/γράψει ΟΛΑ τα bytes με τη μία (Partial I/O).", "correct": true, "explanation": "Μπορεί να στείλεις 100 bytes και η write() να επιστρέψει ότι έστειλε 30 (π.χ. γέμισε ο network buffer). Πρέπει να ξανακαλέσεις για τα υπόλοιπα 70."},
                        {"text": "Για να καθυστερήσουμε το πρόγραμμα.", "correct": false, "explanation": "Δεν υπάρχει τέτοιος σκοπός."},
                        {"text": "Γιατί το UDP διασπά τα πακέτα.", "correct": false, "explanation": "Στο UDP το πακέτο φεύγει/έρχεται ΟΛΟΚΛΗΡΟ. Τα partial reads είναι πρόβλημα του TCP stream."}
                    ]
                }
            ]
        },
        "examples": {
            "title": "Real-world Examples",
            "questions": [
                {
                    "q": "Στο παράδειγμα rlsd (Remote ls), πώς ο server στέλνει το αποτέλεσμα της ls στον client;",
                    "options": [
                        {"text": "Χρησιμοποιεί την popen() για να τρέξει την εντολή και να διαβάσει το output της, το οποίο μετά γράφει στο socket του client.", "correct": true, "explanation": "Είναι ένα κλασικό παράδειγμα pipe-to-socket integration."},
                        {"text": "Ο client συνδέεται κατευθείαν στο τερματικό του server.", "correct": false, "explanation": "Ο server εκτελεί την εντολή και προωθεί το string."},
                        {"text": "Στέλνει όλο το filesystem μέσω UDP.", "correct": false, "explanation": "Χρησιμοποιεί TCP και στέλνει απλά output κειμένου."}
                    ]
                },
                {
                    "q": "Στο παιχνίδι PRS (Paper-Rock-Scissors) του μαθήματος, ποιες τεχνικές IPC συνδυάζονται;",
                    "options": [
                        {"text": "Συνδυάζει Pipes (για την επικοινωνία του parent/referee με το local child) και Sockets (για την επικοινωνία με τον remote παίκτη).", "correct": true, "explanation": "Ιδανικό παράδειγμα εξετάσεων: διαχείριση ταυτόχρονων IPC channels."},
                        {"text": "Χρησιμοποιεί μόνο Shared Memory.", "correct": false, "explanation": "Χρησιμοποιεί fd-based IPC."},
                        {"text": "Όλα γίνονται με UDP broadcasts.", "correct": false, "explanation": "Το παιχνίδι απαιτεί αξιόπιστα connections (TCP) και local pipes."}
                    ]
                }
            ]
        }
    },
    "topic6": {
        "intro": {
            "title": "What Are Threads",
            "questions": [
                {
                    "q": "Τι μοιράζονται τα threads μιας διεργασίας;",
                    "options": [
                        {"text": "Τον χώρο διευθύνσεων (code, data, heap), τα open file descriptors, τα signal handlers.", "correct": true, "explanation": "Τα threads μοιράζονται τα πάντα εκτός από stack, PC, registers."},
                        {"text": "Μόνο τον κώδικα (code segment), τίποτα άλλο.", "correct": false, "explanation": "Μοιράζονται πολύ περισσότερα: data, heap, file descriptors κλπ."},
                        {"text": "Τίποτα — κάθε thread έχει δικό του address space.", "correct": false, "explanation": "Αυτό ισχύει για processes, όχι threads."}
                    ]
                },
                {
                    "q": "Πώς γίνεται compile ένα πρόγραμμα με pthreads;",
                    "options": [
                        {"text": "gcc prog.c -lpthread (ή -pthread)", "correct": true, "explanation": "Χωρίς το -lpthread ο linker δεν βρίσκει τις pthread_ συναρτήσεις."},
                        {"text": "gcc prog.c -lthread", "correct": false, "explanation": "Η σωστή βιβλιοθήκη είναι -lpthread."},
                        {"text": "Δεν χρειάζεται ειδικό flag, αρκεί το #include <pthread.h>.", "correct": false, "explanation": "Το header δεν αρκεί — πρέπει να γίνει link η βιβλιοθήκη."}
                    ]
                }
            ]
        },
        "comparison": {
            "title": "Thread vs Process",
            "questions": [
                {
                    "q": "Αν ένα thread κάνει segfault, τι γίνεται με τα υπόλοιπα threads;",
                    "options": [
                        {"text": "Ολόκληρη η διεργασία τερματίζεται, μαζί και όλα τα threads.", "correct": true, "explanation": "Τα threads δεν έχουν isolation — ένα crash σκοτώνει τα πάντα."},
                        {"text": "Μόνο το thread που έκανε segfault τερματίζεται.", "correct": false, "explanation": "Δεν υπάρχει isolation μεταξύ threads."},
                        {"text": "Τα υπόλοιπα threads συνεχίζουν κανονικά.", "correct": false, "explanation": "Αδύνατο — μοιράζονται address space."}
                    ]
                },
                {
                    "q": "Ποιο είναι το κύριο πλεονέκτημα των threads έναντι processes;",
                    "options": [
                        {"text": "Ταχύτερη δημιουργία και κοινή πρόσβαση σε δεδομένα χωρίς IPC.", "correct": true, "explanation": "Δεν γίνεται αντιγραφή address space, η επικοινωνία γίνεται μέσω shared memory."},
                        {"text": "Μεγαλύτερη ασφάλεια και isolation.", "correct": false, "explanation": "Τα processes έχουν καλύτερη isolation."},
                        {"text": "Δεν χρειάζονται mutexes.", "correct": false, "explanation": "Χρειάζονται mutexes ακριβώς λόγω της κοινής μνήμης!"}
                    ]
                }
            ]
        },
        "create": {
            "title": "pthread_create & exit",
            "questions": [
                {
                    "q": "Ποιο είναι το signature μιας thread function;",
                    "options": [
                        {"text": "void *function(void *arg) — δέχεται void* και επιστρέφει void*.", "correct": true, "explanation": "Αυτό είναι mandatory. Ο void* επιτρέπει να περαστεί/επιστραφεί οποιοδήποτε τύπο."},
                        {"text": "int function(int arg) — δέχεται int και επιστρέφει int.", "correct": false, "explanation": "Η pthread_create απαιτεί void *(*)(void *)."},
                        {"text": "void function(void) — δεν δέχεται ούτε επιστρέφει τίποτα.", "correct": false, "explanation": "Πρέπει να δέχεται void* και να επιστρέφει void*."}
                    ]
                },
                {
                    "q": "Τι γίνεται αν η main() τερματίσει με return πριν τα threads;",
                    "options": [
                        {"text": "Η διεργασία τερματίζεται, σκοτώνοντας όλα τα threads.", "correct": true, "explanation": "Η return από main() = exit() = θάνατος για ολόκληρη τη διεργασία. Χρησιμοποίησε pthread_exit() στη main αν θέλεις τα threads να συνεχίσουν."},
                        {"text": "Τα threads συνεχίζουν ανεξάρτητα.", "correct": false, "explanation": "Χωρίς τη διεργασία δεν υπάρχουν threads."},
                        {"text": "Η main() περιμένει αυτόματα τα threads.", "correct": false, "explanation": "Δεν γίνεται αυτόματο join."}
                    ]
                },
                {
                    "q": "Γιατί δεν πρέπει να περάσουμε &i (loop variable) στο pthread_create;",
                    "options": [
                        {"text": "Η τιμή του i μπορεί να αλλάξει πριν το thread τη διαβάσει (race condition).", "correct": true, "explanation": "Όλα τα threads μοιράζονται τη variable i. Χρησιμοποίησε ξεχωριστό array."},
                        {"text": "Δεν γίνεται να περάσεις pointer σε int.", "correct": false, "explanation": "Γίνεται, αλλά η τιμή αλλάζει."},
                        {"text": "Ο compiler δεν το επιτρέπει.", "correct": false, "explanation": "Ο compiler δεν ελέγχει logic bugs."}
                    ]
                }
            ]
        },
        "management": {
            "title": "Thread Management",
            "questions": [
                {
                    "q": "Τι γίνεται αν δεν κάνεις ούτε join ούτε detach ένα thread;",
                    "options": [
                        {"text": "Resource leak (thread leak) — τα resources δεν ελευθερώνονται.", "correct": true, "explanation": "Σαν zombie processes. Πρέπει πάντα join ή detach."},
                        {"text": "Τίποτα, τα resources καθαρίζονται αυτόματα.", "correct": false, "explanation": "Μόνο detached threads καθαρίζονται αυτόματα."},
                        {"text": "Η διεργασία κρασάρει.", "correct": false, "explanation": "Δεν κρασάρει, αλλά χάνεις πόρους."}
                    ]
                },
                {
                    "q": "Ποια η διαφορά join vs detach;",
                    "options": [
                        {"text": "join: περιμένεις τερματισμό + παίρνεις αποτέλεσμα. detach: τρέχει ελεύθερα, resources ελευθερώνονται αυτόματα.", "correct": true, "explanation": "Χρειάζεσαι αποτέλεσμα → join. Fire-and-forget → detach."},
                        {"text": "join: τερματίζει αμέσως. detach: περιμένει.", "correct": false, "explanation": "Ακριβώς ανάποδα."},
                        {"text": "Δεν υπάρχει διαφορά.", "correct": false, "explanation": "Είναι εντελώς διαφορετικές λειτουργίες."}
                    ]
                }
            ]
        },
        "errors": {
            "title": "Error Handling",
            "questions": [
                {
                    "q": "Γιατί χρησιμοποιούμε strerror() αντί perror() στις pthread functions;",
                    "options": [
                        {"text": "Οι pthread functions δεν θέτουν errno — επιστρέφουν τον error code απευθείας.", "correct": true, "explanation": "perror() ελέγχει errno. Οι pthread functions return error code ≥ 0, οπότε χρειαζόμαστε strerror(err)."},
                        {"text": "Η perror() δεν είναι thread-safe.", "correct": false, "explanation": "Δεν είναι θέμα safety αλλά interface."},
                        {"text": "Δεν υπάρχει λόγος — μπορείς να χρησιμοποιήσεις οποιαδήποτε.", "correct": false, "explanation": "Η perror() θα τυπώσει λάθος μήνυμα γιατί δεν ελέγχει τη σωστή τιμή."}
                    ]
                },
                {
                    "q": "Γιατί δεν πρέπει να επιστρέφεις pointer σε τοπική μεταβλητή από thread;",
                    "options": [
                        {"text": "Το stack του thread καταστρέφεται μετά το pthread_exit() — dangling pointer!", "correct": true, "explanation": "Χρησιμοποίησε malloc, string literals, ή globals αντί local variables."},
                        {"text": "Οι τοπικές μεταβλητές δεν μπορούν να γίνουν pointer.", "correct": false, "explanation": "Γίνεται, αλλά η μνήμη δεν υπάρχει μετά."},
                        {"text": "Δεν υπάρχει πρόβλημα αν κάνεις join αμέσως.", "correct": false, "explanation": "Ακόμα και τότε, η μνήμη δεν εγγυάται ότι υπάρχει."}
                    ]
                }
            ]
        },
        "races": {
            "title": "Race Conditions",
            "questions": [
                {
                    "q": "Γιατί η total_words += count δεν είναι ασφαλής σε multi-threaded πρόγραμμα;",
                    "options": [
                        {"text": "Δεν είναι atomic — αποτελείται από LOAD, ADD, STORE. Αν δύο threads εκτελέσουν ταυτόχρονα, ένα update χάνεται.", "correct": true, "explanation": "Κλασικό read-modify-write race condition. Χρειάζεται mutex."},
                        {"text": "Η += δεν υποστηρίζεται σε threads.", "correct": false, "explanation": "Η += λειτουργεί αλλά δεν είναι thread-safe."},
                        {"text": "Τα threads δεν μπορούν να γράψουν σε globals.", "correct": false, "explanation": "Μπορούν, αλλά χρειάζεται synchronization."}
                    ]
                }
            ]
        },
        "mutexes": {
            "title": "POSIX Mutexes",
            "questions": [
                {
                    "q": "Τι κάνει η pthread_mutex_trylock() σε σχέση με τη lock();",
                    "options": [
                        {"text": "Αν ο mutex είναι κλειδωμένος, επιστρέφει αμέσως EBUSY αντί να μπλοκάρει.", "correct": true, "explanation": "Non-blocking εναλλακτική. Χρήσιμο για busy-wait ή deadlock avoidance."},
                        {"text": "Κλειδώνει μόνο αν δεν υπάρχει κανείς στην ουρά.", "correct": false, "explanation": "Δεν εξετάζει ουρές — ελέγχει μόνο αν είναι free."},
                        {"text": "Δοκιμάζει πολλές φορές πριν εγκαταλείψει.", "correct": false, "explanation": "Δοκιμάζει μόνο μία φορά."}
                    ]
                },
                {
                    "q": "Ποιοι είναι οι βασικοί κανόνες χρήσης mutex;",
                    "options": [
                        {"text": "Μόνο ο κάτοχος κάνει unlock, κράτα τα critical sections μικρά, πάντα ξεκλείδωνε.", "correct": true, "explanation": "Αν ξεχάσεις unlock → deadlock. Αν τα CS είναι μεγάλα → χαμηλή απόδοση."},
                        {"text": "Κλείδωνε τα πάντα με ένα global mutex.", "correct": false, "explanation": "Αυτό δουλεύει αλλά σειριοποιεί τα πάντα (coarse-grained)."},
                        {"text": "Ο mutex δεν χρειάζεται destroy.", "correct": false, "explanation": "Πάντα κάνε pthread_mutex_destroy() για cleanup."}
                    ]
                }
            ]
        },
        "condvars": {
            "title": "Condition Variables",
            "questions": [
                {
                    "q": "Τι κάνει η pthread_cond_wait() ατομικά;",
                    "options": [
                        {"text": "Ξεκλειδώνει τον mutex, κοιμίζει το thread, και μετά στο wakeup ξανακλειδώνει τον mutex.", "correct": true, "explanation": "Τα unlock+sleep γίνονται ατομικά. Στο wakeup, η re-lock μπορεί να μπλοκάρει αν κάποιος άλλος τον κρατά."},
                        {"text": "Κλειδώνει τον mutex και περιμένει σήμα.", "correct": false, "explanation": "Ξεκλειδώνει τον mutex πρώτα (αλλιώς κανείς δεν θα μπορούσε να στείλει signal)."},
                        {"text": "Στέλνει ένα signal σε όλα τα threads.", "correct": false, "explanation": "Αυτό κάνει η pthread_cond_broadcast()."}
                    ]
                },
                {
                    "q": "Ποια η διαφορά signal vs broadcast;",
                    "options": [
                        {"text": "signal ξυπνά ΕΝΑ thread, broadcast ξυπνά ΟΛΑ τα threads που περιμένουν.", "correct": true, "explanation": "Χρησιμοποίησε broadcast αν πολλαπλά threads μπορεί να πρέπει να ξυπνήσουν."},
                        {"text": "signal ξυπνά όλα, broadcast στέλνει μήνυμα.", "correct": false, "explanation": "Ανάποδα."},
                        {"text": "Δεν υπάρχει διαφορά.", "correct": false, "explanation": "Μεγάλη διαφορά — signal=1, broadcast=all."}
                    ]
                }
            ]
        },
        "monitor": {
            "title": "Monitor-Style",
            "questions": [
                {
                    "q": "Γιατί πρέπει να χρησιμοποιούμε while αντί if γύρω από pthread_cond_wait;",
                    "options": [
                        {"text": "Για προστασία από spurious wakeups — μπορεί να ξυπνήσεις χωρίς η συνθήκη να είναι αληθής.", "correct": true, "explanation": "Με while ξαναελέγχεις τη συνθήκη μετά το wakeup. Με if μπορεί να προχωρήσεις λάθος."},
                        {"text": "Γιατί η if δεν λειτουργεί με condition variables.", "correct": false, "explanation": "Λειτουργεί, αλλά δεν είναι ασφαλές."},
                        {"text": "Γιατί το while είναι πιο γρήγορο.", "correct": false, "explanation": "Δεν είναι θέμα ταχύτητας αλλά ορθότητας."}
                    ]
                }
            ]
        },
        "safety": {
            "title": "Thread Safety",
            "questions": [
                {
                    "q": "Γιατί η strtok() δεν είναι thread-safe;",
                    "options": [
                        {"text": "Χρησιμοποιεί internal static pointer — δύο ταυτόχρονα threads πατάνε ο ένας τη θέση του άλλου.", "correct": true, "explanation": "Η strtok_r() λύνει αυτό δεχόμενη saveptr ως argument."},
                        {"text": "Δεν μπορεί να χειριστεί μεγάλα strings.", "correct": false, "explanation": "Αυτό δεν σχετίζεται με thread safety."},
                        {"text": "Δεν υποστηρίζεται σε POSIX.", "correct": false, "explanation": "Η strtok() υπάρχει σε POSIX αλλά δεν είναι thread-safe."}
                    ]
                },
                {
                    "q": "Τι σημαίνει το _r suffix σε functions (π.χ. strtok_r);",
                    "options": [
                        {"text": "reentrant — η thread-safe εκδοχή που δέχεται εξωτερικό buffer αντί internal static storage.", "correct": true, "explanation": "Ο caller παρέχει state, κάθε thread χρησιμοποιεί δικό του buffer."},
                        {"text": "recursive — μπορεί να κληθεί μέσα σε εαυτή.", "correct": false, "explanation": "Αν και σχετικές έννοιες, το _r σημαίνει reentrant."},
                        {"text": "restricted — μόνο για root χρήστες.", "correct": false, "explanation": "Δεν σχετίζεται με δικαιώματα."}
                    ]
                }
            ]
        },
        "prodcons": {
            "title": "Producer-Consumer",
            "questions": [
                {
                    "q": "Στο Producer-Consumer, γιατί χρειαζόμαστε ΔΥΟ condition variables;",
                    "options": [
                        {"text": "Μία (cond_nonfull) για τον producer να περιμένει όταν ο buffer είναι γεμάτος, μία (cond_nonempty) για τον consumer όταν είναι άδειος.", "correct": true, "explanation": "Κάθε CV αντιστοιχεί σε διαφορετική συνθήκη αναμονής."},
                        {"text": "Μία αρκεί — χρησιμοποιούμε broadcast.", "correct": false, "explanation": "Θα δούλευε αλλά δεν είναι αποδοτικό."},
                        {"text": "Χρειαζόμαστε τρεις — μία για κάθε θέση στον buffer.", "correct": false, "explanation": "Δύο αρκούν: full/empty conditions."}
                    ]
                },
                {
                    "q": "Τι γίνεται αν αλλάξεις τον usleep σε usleep(0) στον producer;",
                    "options": [
                        {"text": "Ο producer τρέχει πολύ γρηγορότερα, γεμίζει τον buffer, εμφανίζονται 'Found Buffer Full' μηνύματα.", "correct": true, "explanation": "Η σχεδίαση με condition variables αποτρέπει busy-waiting — ο producer μπλοκάρει κανονικά."},
                        {"text": "Τίποτα δεν αλλάζει.", "correct": false, "explanation": "Η ταχύτητα αλλάζει δραματικά."},
                        {"text": "Crash λόγω buffer overflow.", "correct": false, "explanation": "Δεν γίνεται overflow — ο producer μπλοκάρει αν γεμίσει."}
                    ]
                }
            ]
        },
        "concurrency": {
            "title": "Concurrency Errors",
            "questions": [
                {
                    "q": "Ποια η διαφορά μεταξύ data race και atomicity violation;",
                    "options": [
                        {"text": "Data race: κανένα lock. Atomicity violation: υπάρχει lock αλλά δεν καλύπτει ολόκληρη τη λογική operation.", "correct": true, "explanation": "Π.χ. check-then-act πρέπει να είναι atomic, αλλά αν κλειδωθεί μόνο το check..."},
                        {"text": "Δεν υπάρχει διαφορά.", "correct": false, "explanation": "Είναι ξεχωριστές κατηγορίες σφαλμάτων."},
                        {"text": "Atomicity violation αφορά μόνο databases.", "correct": false, "explanation": "Αφορά οποιοδήποτε multi-threaded κώδικα."}
                    ]
                },
                {
                    "q": "Πώς αποτρέπεται ένα deadlock;",
                    "options": [
                        {"text": "Πάντα κλείδωνε mutexes με σταθερή σειρά (lock ordering) — π.χ. πάντα m1 πριν m2.", "correct": true, "explanation": "Σπάει τον κύκλο αμοιβαίας αναμονής."},
                        {"text": "Μην χρησιμοποιείς mutexes.", "correct": false, "explanation": "Τότε θα έχεις data races!"},
                        {"text": "Χρησιμοποίησε περισσότερα mutexes.", "correct": false, "explanation": "Περισσότερα mutexes αυξάνουν τον κίνδυνο."}
                    ]
                }
            ]
        },
        "locking": {
            "title": "Locking Strategies",
            "questions": [
                {
                    "q": "Τι σημαίνει 'no composability' στο multi-threaded programming;",
                    "options": [
                        {"text": "Δεν μπορείς να φτιάξεις safe υπηρεσίες συνδυάζοντας safe sub-υπηρεσίες.", "correct": true, "explanation": "Π.χ. synch_withdraw + synch_deposit = non-atomic move. Η ασφάλεια δεν είναι composable."},
                        {"text": "Δεν μπορείς να χρησιμοποιήσεις composition σε κλάσεις C++.", "correct": false, "explanation": "Δεν σχετίζεται με OOP."},
                        {"text": "Δεν μπορείς να έχεις πάνω από 2 threads.", "correct": false, "explanation": "Δεν σχετίζεται με αριθμό threads."}
                    ]
                },
                {
                    "q": "Στο Account Library example, γιατί η move(A,B) || move(B,A) δημιουργεί deadlock;",
                    "options": [
                        {"text": "Η πρώτη κλειδώνει A (περιμένει B), η δεύτερη κλειδώνει B (περιμένει A) — κυκλική αναμονή.", "correct": true, "explanation": "Λύση: κλείδωνε πάντα τον λογαριασμό με τη μικρότερη διεύθυνση πρώτα."},
                        {"text": "Η move δεν μπορεί να τρέξει παράλληλα.", "correct": false, "explanation": "Μπορεί — και αυτό είναι το πρόβλημα."},
                        {"text": "Τα locks δεν λειτουργούν μεταξύ διαφορετικών accounts.", "correct": false, "explanation": "Κάθε account έχει δικό του lock."}
                    ]
                }
            ]
        }
    },
    "topic7": {
        "intro": {
            "title": "System V IPC Overview",
            "questions": [
                {
                    "q": "Ποιοι είναι οι βασικοί περιορισμοί των pipes;",
                    "options": [
                        {"text": "Μονόδρομα, μόνο μεταξύ related processes, χωρίς message boundaries, χωρίς priorities.", "correct": true, "explanation": "Αυτοί οι περιορισμοί οδήγησαν στη δημιουργία System V IPC."},
                        {"text": "Δεν μπορούν να μεταφέρουν binary δεδομένα.", "correct": false, "explanation": "Τα pipes μεταφέρουν οποιαδήποτε bytes."},
                        {"text": "Λειτουργούν μόνο σε TCP δίκτυα.", "correct": false, "explanation": "Τα pipes είναι local IPC, δεν σχετίζονται με δίκτυα."}
                    ]
                },
                {
                    "q": "Τι σημαίνει 'Kernel Lifetime' για τα IPC objects;",
                    "options": [
                        {"text": "Τα IPC objects ζουν στον kernel μέχρι ρητή διαγραφή (IPC_RMID ή ipcrm), ακόμα και αν πεθάνουν οι διεργασίες.", "correct": true, "explanation": "Αν ξεχάσεις τον καθαρισμό, μένουν μέχρι reboot."},
                        {"text": "Τα IPC objects ζουν όσο ζει η διεργασία.", "correct": false, "explanation": "Αυτό ισχύει για pipes, όχι System V IPC."},
                        {"text": "Τα IPC objects ζουν στο filesystem.", "correct": false, "explanation": "Δεν χρησιμοποιούν inodes ούτε file descriptors."}
                    ]
                }
            ]
        },
        "keys": {
            "title": "IPC Keys & Access",
            "questions": [
                {
                    "q": "Τι κάνει η ftok() και πώς λειτουργεί;",
                    "options": [
                        {"text": "Δημιουργεί ένα key_t συνδυάζοντας τον inode number ενός αρχείου + proj_id byte.", "correct": true, "explanation": "Δύο unrelated processes με τα ίδια arguments παίρνουν το ίδιο key."},
                        {"text": "Δημιουργεί ένα random κλειδί κάθε φορά.", "correct": false, "explanation": "Είναι ντετερμινιστική — ίδια inputs, ίδιο output."},
                        {"text": "Ανοίγει ένα αρχείο και επιστρέφει fd.", "correct": false, "explanation": "Η ftok δεν ανοίγει αρχεία — χρησιμοποιεί τον inode."}
                    ]
                },
                {
                    "q": "Πότε χρησιμοποιούμε IPC_PRIVATE;",
                    "options": [
                        {"text": "Όταν μόνο parent-child processes χρειάζονται πρόσβαση — δημιουργεί unique key.", "correct": true, "explanation": "Ο parent δημιουργεί, τα children κληρονομούν τον ID μέσω fork."},
                        {"text": "Για κρυπτογράφηση IPC.", "correct": false, "explanation": "Το IPC_PRIVATE δεν σχετίζεται με ασφάλεια."},
                        {"text": "Για shared memory μεταξύ unrelated processes.", "correct": false, "explanation": "Unrelated processes δεν μπορούν να βρουν IPC_PRIVATE objects."}
                    ]
                }
            ]
        },
        "msgq": {
            "title": "Message Queues API",
            "questions": [
                {
                    "q": "Τι πρέπει να είναι πάντα > 0 στο message struct;",
                    "options": [
                        {"text": "Το mtype — ο τύπος μηνύματος. Αν δεν είναι θετικό, η msgsnd() αποτυγχάνει.", "correct": true, "explanation": "Αρνητικά mtype χρησιμοποιούνται στη msgrcv() για priority selection."},
                        {"text": "Το μέγεθος του mtext.", "correct": false, "explanation": "Μπορεί να είναι 0 (μήνυμα χωρίς δεδομένα)."},
                        {"text": "Ο αριθμός μηνυμάτων στην ουρά.", "correct": false, "explanation": "Ο αριθμός δεν ελέγχεται από τον χρήστη."}
                    ]
                },
                {
                    "q": "Τι κάνει η msgrcv() με msgtyp = -3;",
                    "options": [
                        {"text": "Λαμβάνει το πρώτο μήνυμα με type ≤ 3 (π.χ. 1, 2, ή 3), εξυπηρετώντας μικρότερα types πρώτα (priority queue).", "correct": true, "explanation": "Αρνητικό msgtyp = λαμβάνει μήνυμα με τον μικρότερο τύπο ≤ |msgtyp|."},
                        {"text": "Λαμβάνει 3 μηνύματα ταυτόχρονα.", "correct": false, "explanation": "Η msgrcv() λαμβάνει πάντα ΕΝΑ μήνυμα."},
                        {"text": "Αποτυγχάνει γιατί msgtyp δεν μπορεί να είναι αρνητικό.", "correct": false, "explanation": "Αρνητικό msgtyp είναι valid και πολύ χρήσιμο."}
                    ]
                }
            ]
        },
        "msgex": {
            "title": "Message Queue Examples",
            "questions": [
                {
                    "q": "Πώς βρίσκει ένας client ένα υπάρχον message queue;",
                    "options": [
                        {"text": "Χρησιμοποιεί msgget() με το ίδιο key (χωρίς IPC_CREAT) — βρίσκει το υπάρχον.", "correct": true, "explanation": "Τα unrelated processes συμφωνούν σε ένα key (π.χ. μέσω header file ή ftok)."},
                        {"text": "Λαμβάνει τον ID μέσω pipe.", "correct": false, "explanation": "Αυτό θα απαιτούσε ήδη IPC μεταξύ τους."},
                        {"text": "Σκανάρει όλα τα queue IDs μέχρι να βρει.", "correct": false, "explanation": "Αυτό δεν είναι πρακτικό."}
                    ]
                }
            ]
        },
        "shm": {
            "title": "Shared Memory API",
            "questions": [
                {
                    "q": "Γιατί η Shared Memory είναι ο ταχύτερος IPC μηχανισμός;",
                    "options": [
                        {"text": "Δεν γίνεται αντιγραφή δεδομένων μεταξύ user space και kernel — οι διεργασίες βλέπουν τις ίδιες physical pages.", "correct": true, "explanation": "Zero-copy. Στα message queues τα δεδομένα αντιγράφονται στον kernel και πίσω."},
                        {"text": "Χρησιμοποιεί ειδικό hardware.", "correct": false, "explanation": "Χρησιμοποιεί κανονική RAM."},
                        {"text": "Δεν χρειάζεται system calls.", "correct": false, "explanation": "Χρειάζεται shmget/shmat — μετά η πρόσβαση γίνεται χωρίς syscalls."}
                    ]
                },
                {
                    "q": "Τι κάνει η shmdt() και τι ΔΕΝ κάνει;",
                    "options": [
                        {"text": "Αποκολλά τη shared memory από το address space. ΔΕΝ σβήνει τα δεδομένα (γι αυτό χρειάζεται shmctl IPC_RMID).", "correct": true, "explanation": "Η μνήμη παραμένει στον kernel μετά το detach."},
                        {"text": "Σβήνει τη shared memory.", "correct": false, "explanation": "Αυτό κάνει η shmctl(IPC_RMID)."},
                        {"text": "Κλειδώνει τη shared memory.", "correct": false, "explanation": "Η shmdt δεν σχετίζεται με locking."}
                    ]
                }
            ]
        },
        "shmex": {
            "title": "Shared Memory Examples",
            "questions": [
                {
                    "q": "Στο sharedMem1.c / sharedMem2.c, ποιο πρόβλημα δεν αντιμετωπίζεται;",
                    "options": [
                        {"text": "Δεν υπάρχει synchronization — αν δύο διεργασίες γράψουν ταυτόχρονα, γίνεται race condition.", "correct": true, "explanation": "Χρειάζονται semaphores για ασφαλή πρόσβαση."},
                        {"text": "Δεν μπορούν να τρέξουν σε διαφορετικά μηχανήματα.", "correct": false, "explanation": "Shared memory είναι local IPC — αυτό δεν είναι bug."},
                        {"text": "Δεν κλείνουν τα file descriptors.", "correct": false, "explanation": "Shared memory δεν χρησιμοποιεί fd."}
                    ]
                }
            ]
        },
        "semconcepts": {
            "title": "Semaphore Concepts",
            "questions": [
                {
                    "q": "Τι κάνει η DOWN (P) operation σε semaphore;",
                    "options": [
                        {"text": "Αν semval > 0: μειώνει κατά 1. Αν semval = 0: μπλοκάρει μέχρι κάποιος κάνει UP.", "correct": true, "explanation": "Ατομική πράξη. Η διεργασία κοιμάται αν δεν υπάρχει πόρος."},
                        {"text": "Αυξάνει τον counter κατά 1.", "correct": false, "explanation": "Αυτό κάνει η UP (V)."},
                        {"text": "Σβήνει τον semaphore.", "correct": false, "explanation": "Αυτό κάνει η semctl(IPC_RMID)."}
                    ]
                },
                {
                    "q": "Τι σημαίνει ότι οι semaphores είναι 'advisory';",
                    "options": [
                        {"text": "Δεν εμποδίζουν φυσικά την πρόσβαση — οι διεργασίες πρέπει να συνεργάζονται.", "correct": true, "explanation": "Σαν τα traffic lights — δεν σταματούν φυσικά τα αυτοκίνητα."},
                        {"text": "Δίνουν συμβουλές στον kernel για optimization.", "correct": false, "explanation": "Δεν σχετίζεται με optimization."},
                        {"text": "Μπορούν να χρησιμοποιηθούν μόνο σε advisory mode.", "correct": false, "explanation": "Στο Linux δεν υπάρχει mandatory mode για semaphores."}
                    ]
                }
            ]
        },
        "semapi": {
            "title": "Semaphore API",
            "questions": [
                {
                    "q": "Γιατί πρέπει να ορίσεις εσύ το union semun;",
                    "options": [
                        {"text": "Πολλά συστήματα δεν το ορίζουν στα headers — πρέπει ο programmer να το δηλώσει.", "correct": true, "explanation": "Κλασική ερώτηση εξέτασης! Ορίζεις: int val, struct semid_ds *buf, unsigned short *array."},
                        {"text": "Γιατί το union πρέπει να περιέχει custom πεδία.", "correct": false, "explanation": "Τα πεδία είναι σταθερά (val, buf, array)."},
                        {"text": "Δεν χρειάζεται — απλά χρησιμοποίησε int.", "correct": false, "explanation": "Η semctl() απαιτεί union semun — int δεν αρκεί."}
                    ]
                },
                {
                    "q": "Τι σημαίνει sem_op = 0 στη semop();",
                    "options": [
                        {"text": "Wait-for-zero: η διεργασία μπλοκάρει μέχρι η τιμή του semaphore γίνει 0.", "correct": true, "explanation": "Χρήσιμο για synchronization — π.χ. περίμενε μέχρι όλοι οι πόροι απελευθερωθούν."},
                        {"text": "Δεν κάνει τίποτα (no-op).", "correct": false, "explanation": "Κάνει wait — μπλοκάρει αν η τιμή δεν είναι 0."},
                        {"text": "Θέτει την τιμή σε 0.", "correct": false, "explanation": "Αυτό κάνει η semctl(SETVAL, 0)."}
                    ]
                }
            ]
        },
        "semex": {
            "title": "Semaphore Examples",
            "questions": [
                {
                    "q": "Στο fork+shm+semaphore counter, γιατί ο counter είναι σωστός (200000);",
                    "options": [
                        {"text": "Ο semaphore (init=1) εξασφαλίζει mutual exclusion — μόνο μία διεργασία τη φορά αυξάνει τον counter.", "correct": true, "explanation": "sem_P (DOWN) πριν, sem_V (UP) μετά — binary semaphore = mutex."},
                        {"text": "Η shared memory αυτόματα synchronize τις εγγραφές.", "correct": false, "explanation": "Δεν γίνεται αυτόματα — χρειάζεται ρητός synchronization."},
                        {"text": "Το fork() εξασφαλίζει σειριακή εκτέλεση.", "correct": false, "explanation": "Μετά το fork, parent/child τρέχουν παράλληλα."}
                    ]
                }
            ]
        },
        "semchallenge": {
            "title": "Semaphore Challenges",
            "questions": [
                {
                    "q": "Τι κάνει η flag SEM_UNDO;",
                    "options": [
                        {"text": "Αν η διεργασία πεθάνει, ο kernel αναιρεί αυτόματα τις semaphore operations — αποτρέπει orphaned locks.", "correct": true, "explanation": "Χωρίς SEM_UNDO, αν μια διεργασία crashάρει κρατώντας semaphore, μένει locked για πάντα."},
                        {"text": "Αναιρεί την τελευταία semop() κλήση.", "correct": false, "explanation": "Δεν είναι manual undo — ενεργοποιείται αυτόματα στον τερματισμό."},
                        {"text": "Κάνει undo ολόκληρου του semaphore set.", "correct": false, "explanation": "Αφορά μόνο τις πράξεις της τρέχουσας διεργασίας."}
                    ]
                },
                {
                    "q": "Ποια η διαφορά mutex (pthread) vs semaphore (System V);",
                    "options": [
                        {"text": "Mutex: intra-process (threads), binary μόνο, ο κάτοχος ξεκλειδώνει. Semaphore: inter-process, counting > 1, κάποιος άλλος μπορεί να κάνει UP.", "correct": true, "explanation": "System V semaphores δουλεύουν μεταξύ unrelated processes — mutexes μόνο μεταξύ threads."},
                        {"text": "Δεν υπάρχει ουσιαστική διαφορά.", "correct": false, "explanation": "Μεγάλες διαφορές σε scope, functionality, API."},
                        {"text": "Mutex > semaphore σε κάθε περίπτωση.", "correct": false, "explanation": "Εξαρτάται από τις ανάγκες — inter-process απαιτεί semaphores."}
                    ]
                }
            ]
        },
        "filelock": {
            "title": "File Locking",
            "questions": [
                {
                    "q": "Ποια η διαφορά F_SETLK vs F_SETLKW;",
                    "options": [
                        {"text": "F_SETLK: non-blocking (αποτυχία αν δεν μπορεί). F_SETLKW: blocking (περιμένει μέχρι να γίνει δυνατό).", "correct": true, "explanation": "F_SETLK επιστρέφει -1 αν locked. F_SETLKW κοιμάται μέχρι unlock."},
                        {"text": "F_SETLK κλειδώνει write, F_SETLKW κλειδώνει read.", "correct": false, "explanation": "Τον τύπο lock τον καθορίζει το l_type (F_RDLCK/F_WRLCK)."},
                        {"text": "F_SETLK είναι mandatory, F_SETLKW advisory.", "correct": false, "explanation": "Και τα δύο είναι advisory στο Linux."}
                    ]
                },
                {
                    "q": "Τι σημαίνει l_len = 0 στο struct flock;",
                    "options": [
                        {"text": "Κλειδώνει από l_start μέχρι το τέλος του αρχείου (ακόμα και bytes που δεν υπάρχουν ακόμα).", "correct": true, "explanation": "Χρήσιμο για append operations — κλειδώνει ό,τι γραφτεί μετά."},
                        {"text": "Δεν κλειδώνει τίποτα.", "correct": false, "explanation": "0 = until EOF, δεν σημαίνει 0 bytes."},
                        {"text": "Κλειδώνει ολόκληρο τον δίσκο.", "correct": false, "explanation": "Κλειδώνει μόνο μέσα στο αρχείο."}
                    ]
                }
            ]
        },
        "filelockex": {
            "title": "File Locking Examples",
            "questions": [
                {
                    "q": "Στο deadlock example, πώς εντοπίζεται το πρόβλημα;",
                    "options": [
                        {"text": "Ο parent χρησιμοποιεί F_SETLK (non-blocking) αντί F_SETLKW — αν αποτύχει, ξέρει ότι υπάρχει πρόβλημα και τερματίζει.", "correct": true, "explanation": "Non-blocking lock = try-lock pattern. Αν αποτύχει → EAGAIN → ο parent μπορεί να πάρει αποφάσεις."},
                        {"text": "Ο kernel ανιχνεύει αυτόματα deadlock.", "correct": false, "explanation": "Σε κάποια OS γίνεται, αλλά δεν είναι guaranteed."},
                        {"text": "Δεν εντοπίζεται — τρέχει για πάντα.", "correct": false, "explanation": "Με F_SETLK (non-blocking) εντοπίζεται."}
                    ]
                },
                {
                    "q": "Στο lockit.c, γιατί ο child μπλοκάρει στο fcntl(F_SETLKW);",
                    "options": [
                        {"text": "Ο parent κρατά write lock στα bytes 0-9, και ο child ζητά lock στα bytes 0-4 (υποσύνολο). F_SETLKW περιμένει.", "correct": true, "explanation": "Τα byte ranges επικαλύπτονται. Ο child περιμένει μέχρι ο parent κάνει unlock."},
                        {"text": "Ο child δεν έχει δικαιώματα στο αρχείο.", "correct": false, "explanation": "Ο child κληρονόμησε το fd από τον parent (fork)."},
                        {"text": "Ο child χρησιμοποιεί λάθος file descriptor.", "correct": false, "explanation": "Χρησιμοποιεί τον κληρονομημένο fd."}
                    ]
                }
            ]
        }
    }
};
