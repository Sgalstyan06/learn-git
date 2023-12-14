
        /git stash
git stash pop /get last stashed changes, we can use instead of pop apply
git stash list /get all stashed list
git stash pop stash@{2} /apply the correspond stashed use index 2

        //git commit
git commit -a /do commit and git add, but can not apply with  untracted file
git commit -am "write your commit message"/ do the same with message
git commit /entered the commited detialed
git commit --amend  /when we did commit but want to add something else to the same commit
        
        
        //show commits
git log /show all commits
git log --oneline /show more pretier format
git reflog /show all commits and give more information

        /whe we needed to navigate from one commit to another
git checkout -B master <commit-index>, <branch-name>

git reset --hard @~ /navigate to one parent commit which is indicate one ~, we can write ~~, or ~2 which is indicate which parents  commit to navigate
        /when we navigate to last commit and want to navigate back
git reset --hard ORIG_HEAD /reset that commit which is we ignore