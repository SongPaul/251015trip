# 🚫 서버 없이 PWA 설치하기

## ❌ **PWA 제약사항**
PWA는 보안상의 이유로 **HTTPS 연결**에서만 작동합니다. `file://` 프로토콜로는 설치할 수 없습니다.

---

## ✅ **대안 방법들**

### 🔧 **방법 1: 간단한 로컬 서버 (가장 쉬움)**

#### Windows:
1. **`start-server.bat`** 파일 더블클릭
2. 자동으로 Python 또는 Node.js 서버 시작
3. 브라우저에서 **`http://localhost:8000`** 접속
4. PWA 설치 버튼 클릭

#### Mac/Linux:
```bash
chmod +x start-server.sh
./start-server.sh
```

---

### 🌐 **방법 2: Chrome 확장프로그램**

1. **Chrome 웹스토어**에서 **"Web Server for Chrome"** 설치
2. 확장프로그램 실행
3. **"CHOOSE FOLDER"**로 프로젝트 폴더 선택
4. **"Web Server URL"** 클릭하여 접속
5. PWA 설치

---

### ☁️ **방법 3: 무료 호스팅 (권장)**

#### GitHub Pages (무료, 영구):
1. GitHub 계정 생성
2. 새 Repository 생성
3. 모든 파일 업로드
4. **Settings → Pages → Source: Deploy from a branch**
5. **`https://username.github.io/repository-name`**으로 접속

#### Netlify (무료):
1. [netlify.com](https://netlify.com) 접속
2. **"Deploy manually"** 선택
3. 프로젝트 폴더 드래그 앤 드롭
4. 생성된 URL로 접속

#### Vercel (무료):
1. [vercel.com](https://vercel.com) 접속
2. **"Deploy"** 클릭
3. 프로젝트 폴더 업로드
4. 생성된 URL로 접속

---

### 📱 **방법 4: 모바일에서 직접**

#### Android:
1. **Termux** 앱 설치 (Google Play)
2. 파일들을 폰으로 복사
3. Termux에서:
   ```bash
   pkg install python
   cd /sdcard/상해여행가이드/
   python -m http.server 8000
   ```
4. Chrome에서 `localhost:8000` 접속

#### iPhone:
1. **Working Copy** 앱 설치 (App Store)
2. 파일들 추가
3. **"Share → Run Web Server"**
4. Safari에서 접속

---

## 🎯 **가장 쉬운 방법 순서**

### 1️⃣ **즉시 사용** (서버 필요)
```bash
# Python이 있다면
python -m http.server 8000

# Node.js가 있다면  
npx serve . -p 8000
```

### 2️⃣ **영구 사용** (무료 호스팅)
- **GitHub Pages**: 가장 안정적
- **Netlify**: 가장 쉬움
- **Vercel**: 가장 빠름

### 3️⃣ **오프라인 대안** (PWA 없이)
- 브라우저 북마크로 `index.html` 저장
- "홈 화면에 추가"로 바로가기 생성 (PWA 기능 없음)

---

## 💡 **추천 방법**

### 🏠 **집에서 사용**:
```bash
# 간단한 명령어 하나로
python -m http.server 8000
```

### ✈️ **여행 중 사용**:
1. **GitHub Pages**에 미리 업로드
2. 여행 전에 PWA 설치 완료
3. 오프라인에서도 모든 기능 사용

---

## 🔧 **문제 해결**

### Python/Node.js가 없다면:
1. **Python 설치**: https://www.python.org/downloads/
2. **Node.js 설치**: https://nodejs.org/
3. **Chrome 확장프로그램** 사용

### 포트가 사용 중이라면:
```bash
# 다른 포트 사용
python -m http.server 3000
python -m http.server 5000
```

---

## 📱 **최종 결론**

**PWA 설치는 서버가 필수**이지만, 설정은 매우 간단합니다:

1. **`start-server.bat`** 더블클릭 (Windows)
2. 브라우저에서 `localhost:8000` 접속  
3. **"📱 앱 설치"** 버튼 클릭
4. 완료! 🎉

**한 번 설치하면 서버 없이도 오프라인에서 사용 가능**합니다!