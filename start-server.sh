#!/bin/bash

echo "상해 여행 가이드 PWA 서버 시작..."
echo ""

# Python 확인
if command -v python3 &> /dev/null; then
    echo "Python으로 서버 시작 중... (포트 8000)"
    echo "브라우저에서 http://localhost:8000 으로 접속하세요"
    echo ""
    echo "서버를 중지하려면 Ctrl+C를 누르세요"
    echo ""
    python3 -m http.server 8000
elif command -v python &> /dev/null; then
    echo "Python으로 서버 시작 중... (포트 8000)"
    echo "브라우저에서 http://localhost:8000 으로 접속하세요"
    echo ""
    echo "서버를 중지하려면 Ctrl+C를 누르세요"
    echo ""
    python -m http.server 8000
elif command -v node &> /dev/null; then
    echo "Node.js로 서버 시작 중... (포트 8000)"
    echo "브라우저에서 http://localhost:8000 으로 접속하세요"
    echo ""
    echo "서버를 중지하려면 Ctrl+C를 누르세요"
    echo ""
    npx serve . -p 8000
else
    echo ""
    echo "❌ Python 또는 Node.js가 설치되지 않았습니다."
    echo ""
    echo "다음 중 하나를 설치하세요:"
    echo "1. Python: https://www.python.org/downloads/"
    echo "2. Node.js: https://nodejs.org/"
    echo ""
    echo "또는 다른 로컬 서버를 사용하세요."
    echo ""
fi