# Team.Mohazi react exercise

이 프로젝트는 mohazi의 react 개발 연습을 위해 만들어졌습니다.

* * *

## Github

### Github에 연결 하는 법
```
echo "# react_test_project" >> README.md  
git init  
git add README.md  
git add package-lock.json
git add package.json
git add README.md
git add public
git add src
git add build
git commit -m "first commit"  
git branch -M main  
git remote add origin https://github.com/theseung/react_test_project.git  
git push -u origin main
```
node_module의 경우 용량이 너무 무겁고 일반적으로 변경이 안되는 파일이므로 Skip


### Github에 연결 후 push 방법
```
git add -p (그 후 파일별 수정 내용 확인 후 y)
git commit -m "hi commit"  
git push -u origin main  
(실패시 git push -f origin)
```

* * *

## 서버 켜는법

```
cd /var/www/html/my-app
nohup bash -c 'npm start' &
```

명령어 입력 후 서버를 켜고 난 뒤에는 무조건 exit로 나가야 꺼지지 않음

