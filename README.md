## Advent of code solution scraper

CLI tool that searchs public Github repos for code solutions. End goal is to build a comparison website so you can see how other people solved the same problem

1. search repos for "advent of code XXXX"
2. for each result
   Build path to solutions

   - get latest commit with `/repos/:owner/:repo/commits`
   - get tree from latest commit => `body[0].commit.tree` (= `/repos/:owner/{repo}/git/trees/:sha`)
   - from tree response, walk tree (`body.tree` )

     - is there a `src` folder? => get `src` tree
     - is there a year folder for searched year? `20XX`

       - yes: go to tree with year `20XX`

     - are there day folders/files? `/(day)?\s?\d+{}/i`
       - folder: dive tree
         - if "solution" file, get download url
       - file: get download url

   Abort if dead end

Once hit solution file

1. get download url with `/repos/:owner/:repo/contents/:path`
2. => `body.download_url` ex:
   `https://raw.githubusercontent.com/encse/adventofcode/master/2022/Day01/Solution.cs`
