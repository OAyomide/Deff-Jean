var corefunctions = require('./corefunctions');
exports.jeffALgorithmFact = (recipientId) => {
    var responseArray = [
        'Jeff Dean proved that P=NP when he solved all NP problems in polynomial time on a whiteboard.',
        'Unsatisfied with constant time, Jeff Dean created the world\'s first O(1/n) algorithm.',
        'During his own Google interview, Jeff Dean was asked the implications if P=NP were true. He said "P = 0 or N = 1." Then, before the interviewer had even finished laughing, Jeff examined Google\'s public certificate and wrote the private key on the whiteboard.',
        'Jeff Dean wrote an O(n^2) algorithm once. It was for the Traveling Salesman Problem.',
        'Jeff Dean invented Bigtable so that he would have a place to send his weekly snippets.',
        'Jeff Dean invented BigTable because his resume was too big to fit anywhere else.',
        'Jeff can recite 20,000 digits of pi in 5 hours. He doesn\'t remember them; he just recomputes them on the fly using only O(log n) space.',
        'Jeff Dean quicksorts his laundry.',
        'Jeff Dean puts his pants on one leg at a time, but if he had more legs, you would see that his approach is O(log n).',
        'When Jeff Dean was a kid, he didn\'t play Lego. He wrote the \'lake\' program, which parses Lego instructions and assembles the construction toy.',
        'Jeff Dean once failed a Turing test when he correctly identified the 203rd Fibonacci number in less than a second',
        'Cricket matches used to take 5 days, until Jeff optimized them.',
        'Jeff Dean invented MapReduce so he could sort his fan mail.',
        'To Jeff Dean, "NP" means "No Problemo".'
    ];
    var response = Math.floor(Math.random() * (responseArray.length));
    corefunctions.sendText(recipientId, responseArray[response]);
};

exports.jeffTrueFacts = (recipientId) => {
    var responseArray = [
        'When Jeff Dean goes on vacation, production services across Google mysteriously stop working within a few days.',
        'Jeff once simultaneously reduced all binary sizes by 3% AND raised the severity of a previously known low-priority python bug to critical-priority in a single change that contained no python code',
        'Jeff Dean has Perl Readability',
        'When Jeff gives a seminar at Stanford, it\'s so crowded Don Knuth has to sit on the floor.',
        ' He once wrote a two-hundred-thousand-line application to help the Centers for Disease Control manage specialized statistics for epidemiologists. He wrote it as a summer intern in high school.',
        'Jeff Dean got promoted to level 11 in a system where max level is 10. Google had to invent anothe position',
        'Jeff is really smart, he graduated Summa cum laude'
    ];
    var response = Math.floor(Math.random() * (responseArray.length));
    corefunctions.sendText(recipientId, responseArray[response]);
};

exports.jeffGeneralUntrueFact = (recipientId) => {
    var responseArray = [
        'The OR ELSE construct had to be removed from ISO C after Jeff Dean used it in Mustang and kernels started panicking in terror.',
        'Jeff Dean is not afraid of evil constructors. They are afraid of him.',
        'Jeff Dean doesn\'t write bugs, just features you are unable to understand.',
        'Jeff Dean doesn\'t need speakers or headphones. He just types \'cat *.mp3\', glances at the screen, and his brain decodes the music in the background while he works.',
        'Websearch is just a large unittest Jeff wrote for his real app.',
        'Jeff Dean has to unoptimize his code so that reviewers believe it was written by a human.',
        'Jeff Dean has no backspace on his keyboard, he makes no mistakes.',
        'Google: it\'s basically a Jeff Dean\'s side project.',
        'Emacs\' preferred editor is Jeff Dean.',
        'Jeff\'s code is so fast the assembly code needs three HALT opcodes to stop it.',
        'Jeff Dean\'s watch displays seconds since January 1st, 1970. He is never late.',
        'Errors treat Jeff Dean as a warning.',
        'Jeff Dean has exactly two keys on his keyboard: "0" and "1."',
        'Jeff Dean needs no sudo password, he is the root',
        'Jeff Dean never has the wrong number; you have the wrong phone.',
        'Jeff Dean\'s calendar goes straight from March 31st to April 2nd; no one fools Jeff Dean.',
        'When your code is killed by SIGJEFF, it never runs again.',
        'Chuck Norris is Jeff Dean\'s 20% project.',
        'Once Jeff Dean ordered a list, and the list obeyed him.',
        'Jeff Dean once sliced a Javascript array, the computer exploded',
        'When Jeff Dean listens to mp3s, he just cats them to /dev/dsp and does the decoding in his head.',
        'Jeff Dean does not sleep(), he wait()s.',
        'When Jeff Dean sends you a code review, it\'s because he thinks there\'s something in it you should learn.',
        'Jeff starts his programming sessions with "cat > /dev/mem".',
        'Google once had to move out of a datacenter after Jeff Dean accidentally compressed the index so densely that a black hole was formed.',
        'Jeff Dean spent some 20% time on an AI project. That produced Urs Hoelzle.',
        'Jeff Dean simply walks into Mordor.',
        'Jeff Dean can get 1s out of /dev/zero.',
        'When Jeff Dean says "Hello World", the world says "Hello Jeff".',
        'Jeff Dean was born on December 31, 1969 at 11:48 PM. It took him twelve minutes to implement his first time counter.',
        'There is no \'Ctrl\' key on Jeff Dean\'s keyboard. Jeff Dean is always in control.',
        'After Jeff Shifted an array so hard the processor melted, the shift key stopped appearing on his keyboard(s) out of fear',
        'Jeff Dean is still waiting for mathematicians to discover the joke he hid in the digits of PI.',
        'Jeff Dean remembers only one password. For each site, he concatenates it with the site name, computes its SHA-256 hash, and then types the result.',
        'Jeff can recite 20,000 digits of pi in 5 hours. He doesn\'t remember them; he just recomputes them on the fly using only O(log n) space.',
        'gcc -O4 sends your code to Jeff Dean for a complete rewrite.',
        'Jeff Dean can instantiate abstract classes.',
        'Jeff got Java readability with only 8 lines of code',
        'Jeff doesn\'t sleep, he just sends SIGSUSPEND to the universe.',
        'When your code has undefined behavior, you get a seg fault and corrupted data. When Jeff Dean\'s code has undefined behavior, a unicorn rides in on a rainbow and gives everybody free ice cream.',
        'When Jeff Dean fires up the profiler, loops unroll themselves in fear.',
        'Jeff Dean can parse HTML with a regular expression...correctly.',
        'Chuck Norris can kill you. Jeff Dean can kill -9 you.',
        'Jeff Dean took the bite out of Apple\'s logo.',
        'Jeff Dean can beat you at connect four. In three moves.',
        'When Jeff has an ergonomic evaluation, it is for the protection of his keyboard.',
        'Jeff Dean once implemented a web server in a single printf() call. Other engineers added thousands of lines of explanatory comments but still don\'t understand exactly how it works. Today that program is known as GWS.',
        'Jeff Dean once failed a Turing test when he correctly identified the 203rd Fibonacci number in less than a second.',
        'Jeff Dean doesn\'t use ECC memory. He anticipates cosmic rays and uses them to improve performance.',
        'Jeff Dean\'s IDE doesn\'t do code analysis, it does code appreciation.',
        'Jeff Dean doesn\'t exist, he\'s actually an advanced AI created by Jeff Dean.',
        'Compilers don\'t warn Jeff Dean. Jeff Dean warns compilers.',
        'When Graham Bell invented the telephone, he saw a missed call from Jeff Dean.',
        'When God said: "Let there be light!", Jeff Dean was there to do the code review.',
        'Jeff Dean\'s Peer Review is what got Larry promoted to CEO.',
        'When Jeff Dean designs software, he first codes the binary and then writes the source as documentation.',
        'The rate at which Jeff Dean produces code jumped by a factor of 40 in late 2000 when he upgraded his keyboard to USB2.0.',
        'Jeff Dean was forced to invent asynchronous APIs one day when he optimized a function so that it returned before it was invoked.',
        'Jeff Dean\'s resume has so many accomplishments, it has a table of contents.',
        'You don\'t explain your work to Jeff Dean. Jeff Dean explains your work to you.',
        'Jeff Dean\'s resume lists the things he hasn\'t done; it\'s shorter that way.',
        'You use 10% of your brain. The other 90% is running one of Jeff\'s mapreduce jobs.',
        'Jeff Dean once shifted a bit so hard it ended up on another computer.',
        'Jeff Dean has binary writability.',
        'Jeff Dean has binary readability.',
        'Jeff Dean compiles and runs his code before submitting, but only to check for compiler and CPU bugs.',
        'Sanjay once asked Jeff Dean if he could keep the entire web in his memory. Due to the noise from his keyboard cooling fan, Jeff Dean misheard slightly and wrote Mustang instead of simply answering "Yes".',
        'Jeff Dean acquired Sawzall readability after writing 58 lines of Sawzall code. As part of his readability review, he pointed out a flaw in the style guide which was promptly corrected by the reviewer.',
        'Jeff Dean has punch card readability.',
        'Google Search was Jeff Dean\'s Noogler Project',
        'Once, in early 2002, when the index servers went down, Jeff Dean answered user queries manually for two hours. Evals showed a quality improvement of 5 points.',
        'Jeff Dean once bit a spider, the spider got super powers and C readability',
        'Jeff Dean\'s PIN is the last 4 digits of pi.',
        'Voldemort is scared of Jeff Dean',
        'Jeff Dean Map Reduces his cereal.',
        'Jeff Dean made Google Maps using his knitting kit',
        'Jeff Dean\'s Bubble Sort runs in O(1) time',
        'Jeff Dean doesn\'t kill processes, he slays them.',
        'Jeff Dean sorts his phone contacts by their vcard\'s md5 checksums.'
    ];
    var response = Math.floor(Math.random() * (responseArray.length));
    corefunctions.sendText(recipientId, responseArray[response]);
}

exports.jeffStackOverflow = (recipientId) => {
    var responseArray = [
        'Jeff doesn\'t need stackoverflow 😮😮 and also github!',
        'Jeff wrote a program that opens  stackoverflow accounts, and then answer questions. These accounts are the top stackoverflow question\
        solution providers and similar programs for github have the best\
        repositories. TJ Holowaychuk might just be one. True story! But to be honest, I don\'t know yet',
        'To be honest, I don\'t know 😐',
        'I can\'t say for sure',
        'Maybe he does or maybe not! I don\'t know for sure. 😓',
        'But seriously, why would you ask? 😮',
        'What if he isn\'t? Nothing changes!',
        'I\'d be honest with you, my developer doesn\'t know!😣😥',
        'Maybe you should Google him -pun intended yourself! 😏'
    ];
    var response = Math.floor(Math.random() * (responseArray.length));
    corefunctions.sendText(recipientId, responseArray[response]);
};


exports.jeffSocialMedia = (recipientId) => {
    var responseArray = [
        'Jeff is actually on twitter! @JDMorgan but don\'t know about Facebook',
        'I know his twitter handle. It is @JDMorgan and no idea about Facebook',
        'He is on social media! @JDMorgan'
    ];
    var response = Math.floor(Math.random() * (responseArray.length));
    corefunctions.sendText(recipientId, responseArray[response]);
};

