import shutil, os

shutil.rmtree("dist")
os.system("parcel build src/index.html")
shutil.copy("CNAME", "dist/CNAME")
os.system("gh-pages -d dist")