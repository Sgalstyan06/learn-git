        //git branch
git branch /show all branches
git branch -v /show all branches and commit index and messages
git branch <name-branch> /create new breanch
git checkout <branch-name> //navigate to the branch
git checkout -b <branch-name> /create bransh correspond the indicate branch name and switch to that branch

        /git stash
git stash pop /get last stashed changes, we can use instead of pop apply
git stash list /get all stashed list
git stash pop stash@{2} /apply the correspond stashed use index 2

        //git commit
git commit -a /do commit and git add, but can not apply with  untracted file
git commit -am "write your commit message"/ do the same with message
git commit /entered the commited detialed
git commit --amend  /when we did commit but want to add or forget something to do commit in the same commit
git commit -v /show different between Head and changes
        
        
        //show commits
git log /show all commits
git log --oneline /show more pretier format
git reflog /show all commits and give more information
git reflog <minus number> /we set limit showed commits

        /whe we needed to navigate from one commit to another
git checkout -B master <commit-index>, <branch-name>

        //reset

git reset --hard @~ /revert all changes from the currnet commit and navigate to the correspond parent commit,  which indicates sympbal tilda ~, we can write ~~, or ~2 which is indicate which parents  commit to navigate

git reset --soft @~~/ navigate the correspond commit, and only remove changes from repasitory

git reset --mixed @~, git reset @~ <default>/ navigate the corespond commit, and remove all changes, except work directory

git reset --hard ORIG_HEAD /reset that commit which is we ignore 

git reset <commit index> <file> /reset only correspond file to the commit index, but not navigate to the indicate commit
/we can do the same use command  : git checkout <commit index> <file>
git reset --hard @{3} // we reset changes and navigate to the commit which is indicates with number

    //diff
git diff /check different between work directory and index
git diff HEAD /check differnet between work direcotory and last commit "HEAD"
git diff --cached /check differnet between index and last commit "HEAD"
git diff <branch name> <branch name> /check different between two indicated branches
git diff <commit index> <commit index> /check different between two indicated commites
git diff <commit index> /check different between indicated commite and changes


        // git log
git log //indicate all commit
git log --oneline //show pretier
git log <branch name>
git log <file>
git log -p <file>
git --grep <searching word> //will find commit where we added correspond searching word
git --grep <'more than one word'> -P //this use for search more word
git -G<searching text> -p /if we need to find changes
git log --before '<indicate date>', --first-parent> /search by date

git show , or <commit index>,  /see commit detail

                revert
                