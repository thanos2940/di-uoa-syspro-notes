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
                            "explanation": ""
                        },
                        {
                            "text": "Section 1: Library calls, Section 2: Δίκτυο, Section 3: System calls.",
                            "correct": false,
                            "explanation": ""
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
    }
};
