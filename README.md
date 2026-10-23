# rhys-vaughan.github.io

Source for my technical writing portfolio at <https://rhys-vaughan.github.io/>, built with [Zensical](https://zensical.org/) and deployed to GitHub Pages by GitHub Actions on every push to `main`.

## Local preview

```sh
python -m venv .venv
.venv/Scripts/activate   # Windows (Git Bash); use .venv/bin/activate on macOS/Linux
pip install -r requirements.txt
zensical serve
```

The Zensical version is pinned in `requirements.txt`. Upgrade it deliberately, not by letting it float.
