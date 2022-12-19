## About
Custom file manager CLI tool 

## Start
```
git clone https://github.com/sa58/file-manager.git
git checkout dev

npm start  -- --username=ann
```

## Usage examples
#### nwd
```
up

cd d:
cd d:\
cd "${folder with spaces}"
cd folder
cd Users/username
cd ..
cd .

ls
```


#### os
```
os --EOL
os --cpus
os --homedir
os --username
os --architecture
```

#### files
```
add test.txt
add "test 1.txt"
add ../test_2.txt
add d:\1\test.txt

cat test.txt
cat "test 1.txt"
cat d:\1\test.txt

cp test.txt .
cp test.txt ..
cp "test 1.txt" d:\1

rn test.txt test3.txt
rn test3.txt "test 3.txt"
rn "test 3.txt" "test 4.txt"

mv d:\1\test.txt c:\
mv "test 4.txt" ../
mv "test.txt" .

rm d:\1\2.txt
rm "test 4.txt"
rm test_2.txt
```

#### hash
```
hash test.txt
hash d:\1\test.txt
```

#### compress / decompress
```
compress d:\1\test.txt d:\1\
decompress d:\1\test.txt.br c:\
```
