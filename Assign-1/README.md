Write an application that processes a directory and zip all the directories content inside it into another directory.

INPUT: Following diagram is a directory structure that the node application is going to process. 
- test
---> a.txt 
---> b.txt
---> temp [ directory]
------> temp1.txt
------> temp2.txt
---> dummy [ directory]
------> dummy1.txt
------> dummy2.txt
----> readMe.md
----> doc.txt

 
 OUTPUT should be a zip directory named as output.zip with all the files in it. Make sure it extracts all the content to into a single directory.

 The output should be like this
 output.zip
 -> a.txt
 -> b.txt
 -> temp1.txt
 -> temp2.txt
 -> dummy1.txt
 -> dummy2.txt
 -> readMe.md
 -> doc.txt