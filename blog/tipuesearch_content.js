var tipuesearch = {"pages":[{"title":"About","text":"2017Fall 機械設計工程系 CADP & CP 課程倉儲: https://mde1a1.kmol.info/2017fall 課程投影片: https://mde1a1.kmol.info/2017fall/doc/trunk/index.html 課程網誌: https://mde1a1.kmol.info/2017fall/doc/trunk/blog/","tags":"misc","url":"https://40623113.github.io/40623113/w16/blog/pages/about/"},{"title":"計算機程式第九週期中報告","text":"W9 影片操作 虎尾科技大學-機械設計系-計算機程式-w9 from 吳承哲 on Vimeo . 心得 從一開始的矇懂無知到現在慢慢進入佳境，這些都是用時間和精力換來的，老師和朋友都幫了很大的忙，真的蠻謝謝的，我會繼續努力的。","tags":"Course","url":"https://40623113.github.io/40623113/w16/blog/40623113-w9.html"},{"title":"計算機程式第八週學習心得","text":"W8 影片操作 上課內容: for迴圈 VIMEO: 虎尾科技大學-機械設計系-計算機程式-40623113-w8-1 from 吳承哲 on Vimeo . YOUTUBE: eric6製作計算機 VIMEO: 虎尾科技大學-機械設計系-計算機程式-40623113-w8-2 from 吳承哲 on Vimeo . YOUTUBE: 自評成績 = 70","tags":"Course","url":"https://40623113.github.io/40623113/w16/blog/40623113-w8.html"},{"title":"計算機程式第七週學習心得","text":"W7,EXAM 請錄下從隨身碟啟動系統開始, 到完成新增第七週個人倉儲網誌中的學習心得為止 其餘時間將繼續練習與 PyQt5 計算機程式有關的語法與操作步驟. 操作影片 vimeo: youtube: 學習心得 學到了很多 超級難的 自評成績 = 74","tags":"Course","url":"https://40623113.github.io/40623113/w16/blog/40623113-w7-exam.html"},{"title":"2017 Fall CP 第五週","text":"W5 PyQt5 #!/usr/bin/env python import math from PyQt5.QtCore import Qt from PyQt5.QtWidgets import (QApplication, QGridLayout, QLayout, QLineEdit, QSizePolicy, QToolButton, QWidget) class Button(QToolButton): ''' def __init__(self, text, parent=None): super(Button, self).__init__(parent) ''' # for Python 3 def __init__(self, text): super().__init__() self.setSizePolicy(QSizePolicy.Expanding, QSizePolicy.Preferred) self.setText(text) def sizeHint(self): size = super(Button, self).sizeHint() size.setHeight(size.height() + 20) size.setWidth(max(size.width(), size.height())) return size class Calculator(QWidget): NumDigitButtons = 10 ''' def __init__(self, parent=None): super(Calculator, self).__init__(parent) ''' def __init__(self): super().__init__() self.pendingAdditiveOperator = '' self.pendingMultiplicativeOperator = '' self.sumInMemory = 0.0 self.sumSoFar = 0.0 self.factorSoFar = 0.0 self.waitingForOperand = True self.display = QLineEdit('0') self.display.setReadOnly(True) self.display.setAlignment(Qt.AlignRight) self.display.setMaxLength(15) font = self.display.font() font.setPointSize(font.pointSize() + 8) self.display.setFont(font) self.digitButtons = [] for i in range(Calculator.NumDigitButtons): self.digitButtons.append(self.createButton(str(i), self.digitClicked)) self.pointButton = self.createButton(\".\", self.pointClicked) self.changeSignButton = self.createButton(u\"\\N{PLUS-MINUS SIGN}\", self.changeSignClicked) self.backspaceButton = self.createButton(\"Backspace\", self.backspaceClicked) self.clearButton = self.createButton(\"Clear\", self.clear) self.clearAllButton = self.createButton(\"Clear All\", self.clearAll) self.clearMemoryButton = self.createButton(\"MC\", self.clearMemory) self.readMemoryButton = self.createButton(\"MR\", self.readMemory) self.setMemoryButton = self.createButton(\"MS\", self.setMemory) self.addToMemoryButton = self.createButton(\"M+\", self.addToMemory) self.divisionButton = self.createButton(u\"\\N{DIVISION SIGN}\", self.multiplicativeOperatorClicked) self.timesButton = self.createButton(u\"\\N{MULTIPLICATION SIGN}\", self.multiplicativeOperatorClicked) self.minusButton = self.createButton(\"-\", self.additiveOperatorClicked) self.plusButton = self.createButton(\"+\", self.additiveOperatorClicked) self.squareRootButton = self.createButton(\"Sqrt\", self.unaryOperatorClicked) self.powerButton = self.createButton(u\"x\\N{SUPERSCRIPT TWO}\", self.unaryOperatorClicked) self.reciprocalButton = self.createButton(\"1/x\", self.unaryOperatorClicked) self.equalButton = self.createButton(\"=\", self.equalClicked) mainLayout = QGridLayout() mainLayout.setSizeConstraint(QLayout.SetFixedSize) mainLayout.addWidget(self.display, 0, 0, 1, 6) mainLayout.addWidget(self.backspaceButton, 1, 0, 1, 2) mainLayout.addWidget(self.clearButton, 1, 2, 1, 2) mainLayout.addWidget(self.clearAllButton, 1, 4, 1, 2) mainLayout.addWidget(self.clearMemoryButton, 2, 0) mainLayout.addWidget(self.readMemoryButton, 3, 0) mainLayout.addWidget(self.setMemoryButton, 4, 0) mainLayout.addWidget(self.addToMemoryButton, 5, 0) for i in range(1, Calculator.NumDigitButtons): row = ((9 - i) / 3) + 2 column = ((i - 1) % 3) + 1 mainLayout.addWidget(self.digitButtons[i], row, column) mainLayout.addWidget(self.digitButtons[0], 5, 1) mainLayout.addWidget(self.pointButton, 5, 2) mainLayout.addWidget(self.changeSignButton, 5, 3) mainLayout.addWidget(self.divisionButton, 2, 4) mainLayout.addWidget(self.timesButton, 3, 4) mainLayout.addWidget(self.minusButton, 4, 4) mainLayout.addWidget(self.plusButton, 5, 4) mainLayout.addWidget(self.squareRootButton, 2, 5) mainLayout.addWidget(self.powerButton, 3, 5) mainLayout.addWidget(self.reciprocalButton, 4, 5) mainLayout.addWidget(self.equalButton, 5, 5) self.setLayout(mainLayout) self.setWindowTitle(\"Calculator\") def digitClicked(self): clickedButton = self.sender() digitValue = int(clickedButton.text()) if self.display.text() == '0' and digitValue == 0.0: return if self.waitingForOperand: self.display.clear() self.waitingForOperand = False self.display.setText(self.display.text() + str(digitValue)) def unaryOperatorClicked(self): clickedButton = self.sender() clickedOperator = clickedButton.text() operand = float(self.display.text()) if clickedOperator == \"Sqrt\": if operand < 0.0: self.abortOperation() return result = math.sqrt(operand) elif clickedOperator == u\"x\\N{SUPERSCRIPT TWO}\": result = math.pow(operand, 2.0) elif clickedOperator == \"1/x\": if operand == 0.0: self.abortOperation() return result = 1.0 / operand self.display.setText(str(result)) self.waitingForOperand = True def additiveOperatorClicked(self): clickedButton = self.sender() clickedOperator = clickedButton.text() operand = float(self.display.text()) if self.pendingMultiplicativeOperator: if not self.calculate(operand, self.pendingMultiplicativeOperator): self.abortOperation() return self.display.setText(str(self.factorSoFar)) operand = self.factorSoFar self.factorSoFar = 0.0 self.pendingMultiplicativeOperator = '' if self.pendingAdditiveOperator: if not self.calculate(operand, self.pendingAdditiveOperator): self.abortOperation() return self.display.setText(str(self.sumSoFar)) else: self.sumSoFar = operand self.pendingAdditiveOperator = clickedOperator self.waitingForOperand = True def multiplicativeOperatorClicked(self): clickedButton = self.sender() clickedOperator = clickedButton.text() operand = float(self.display.text()) if self.pendingMultiplicativeOperator: if not self.calculate(operand, self.pendingMultiplicativeOperator): self.abortOperation() return self.display.setText(str(self.factorSoFar)) else: self.factorSoFar = operand self.pendingMultiplicativeOperator = clickedOperator self.waitingForOperand = True def equalClicked(self): operand = float(self.display.text()) if self.pendingMultiplicativeOperator: if not self.calculate(operand, self.pendingMultiplicativeOperator): self.abortOperation() return operand = self.factorSoFar self.factorSoFar = 0.0 self.pendingMultiplicativeOperator = '' if self.pendingAdditiveOperator: if not self.calculate(operand, self.pendingAdditiveOperator): self.abortOperation() return self.pendingAdditiveOperator = '' else: self.sumSoFar = operand self.display.setText(str(self.sumSoFar)) self.sumSoFar = 0.0 self.waitingForOperand = True def pointClicked(self): if self.waitingForOperand: self.display.setText('0') if \".\" not in self.display.text(): self.display.setText(self.display.text() + \".\") self.waitingForOperand = False def changeSignClicked(self): text = self.display.text() value = float(text) if value > 0.0: text = \"-\" + text elif value < 0.0: text = text[1:] self.display.setText(text) def backspaceClicked(self): if self.waitingForOperand: return text = self.display.text()[:-1] if not text: text = '0' self.waitingForOperand = True self.display.setText(text) def clear(self): if self.waitingForOperand: return self.display.setText('0') self.waitingForOperand = True def clearAll(self): self.sumSoFar = 0.0 self.factorSoFar = 0.0 self.pendingAdditiveOperator = '' self.pendingMultiplicativeOperator = '' self.display.setText('0') self.waitingForOperand = True def clearMemory(self): self.sumInMemory = 0.0 def readMemory(self): self.display.setText(str(self.sumInMemory)) self.waitingForOperand = True def setMemory(self): self.equalClicked() self.sumInMemory = float(self.display.text()) def addToMemory(self): self.equalClicked() self.sumInMemory += float(self.display.text()) def createButton(self, text, member): button = Button(text) button.clicked.connect(member) return button def abortOperation(self): self.clearAll() self.display.setText(\"####\") def calculate(self, rightOperand, pendingOperator): if pendingOperator == \"+\": self.sumSoFar += rightOperand elif pendingOperator == \"-\": self.sumSoFar -= rightOperand elif pendingOperator == u\"\\N{MULTIPLICATION SIGN}\": self.factorSoFar *= rightOperand elif pendingOperator == u\"\\N{DIVISION SIGN}\": if rightOperand == 0.0: return False self.factorSoFar /= rightOperand return True if __name__ == '__main__': import sys app = QApplication(sys.argv) calc = Calculator() calc.show() sys.exit(app.exec_())","tags":"Course","url":"https://40623113.github.io/40623113/w16/blog/2017-fall-cp-w5.html"},{"title":"2017 Fall CADP 第二週","text":"本學期起各班透過一台 Ubuntu 16.04 主機, 建立 Fossil SCM 伺服器, 且每一學員發放一個 Fossil SCM 倉儲, 其中各學員可以利用 Wiki 與 Technote 紀錄學習資料外, 還可以將靜態網誌與簡報檔案放入 Files 資料區. 測試沒有綁定帳號後, 指定帳號新增提交推送版本. 測試 commit 時沒有 --user-override 4062 測試 push 才綁帳號 1a 測試 1a 測試2 configuration - 組成內容與狀態 scm - software configuration management batch - 批次 remark - 註解 default - 內定, 默認 fossil clone - 克隆 fossil add - 新增 fossil commit - 提交 fossil push - 推送 fossil remote-url off fossil ui - user interface url - uniform resource locator https - secure hypertext transfer protocol protocol - 協定 certification - 簽章 - public key server certify - 認證 vacuum - 吸塵 fossil clone https://mde1a1.kmol.info/pymcadp pymcadp.fossil IDE - Integrated Development Environment 希望為每位學員建立倉儲的設想流程如下: 各學員可以獨立維護倉儲內容, 也可以在總管理員的權限下, 為分組學員建立帳號, 逐步導入協同設計 各學員的倉儲以修課班級命名伺服器, 以學號命名倉儲, 方便依照此一規律擷取各學員的倉儲頁面. 各學員能以電子郵件收到與新建倉儲相關的連結, 以及帳號密碼. 必須擴增 Ubuntu ulimits -n 同時開檔的設限範圍 (內定只允許同時開啟 1024 個檔案) 解決方案: 主機名稱可以透過 domain dns 中的 CNAME 別名方式處理, 因為目前所能提供出來的 IPv4/IPv6 雙支援主機, 之前已經都設定了符號名稱. fossil init 雖然提供指定管理者的 -A 選項功能, 但是無法直接指定管理者對應密碼, 因此必須建立倉儲之後, 再利用 fossil user 修改密碼, 之後再利用 Gmail 寄出通知信, 其中提供倉儲連結, 登入帳號與密碼等資訊. 建立各學員倉儲檔案的程式如下, 如前所述, 主要透過兩個 Fossil SCM 指令完成, 在 Windows 採用 Fossil SCM 2.3 版建立所有 .fossil 倉儲時, 將同時以 email 通知各學員. 各學員的 .fossil 檔案再以 sftp 送到伺服主機對應帳號所屬的目錄下. 必須要特別注意的是, 採用 Fossil SCM 2.3 版所建立的 .fossil 倉儲檔案, 在 Ubuntu 操作系統上也必須採用相同版本的 fossil, 否則舊版 fossil 可能無法開啟新版 fossil 程式所建立的倉儲檔. import os import string import random # 使用 Gmail 寄信必須導入下列模組 import smtplib import re from email.mime.text import MIMEText from email.header import Header # 用來以亂數建立密碼的韓式 def id_generator(size=6, chars=string.ascii_uppercase + string.digits): ''' source: https://stackoverflow.com/questions/2257441/random-string-generation-with-upper-case-letters-and-digits-in-python ''' return ''.join(random.choice(chars) for _ in range(size)) # 讀取學員名單, 逐一取得學員學號, 學員名單, 檢查點 1/7 student_data = open(\"2017fall_list/1b.txt\").read() student_list = student_data.splitlines() # 利用 gmail smtp 功能寄信 server = smtplib.SMTP('smtp.gmail.com:587') server.ehlo() server.starttls() # 以下必須準備好對應郵件帳號與密碼的外部檔案, 所提供的寄信帳號, 是否可以寄信, 檢查點 2/7 ''' 寄信之前必須到 https://www.google.com/settings/security/lesssecureapps 修改權限, 改為較低安全權限 否則無法使用程式寄信! ''' # 從外部檔案讀取要用來寄信的 gmail 帳號與密碼 # mail.txt 格式為: 電子郵箱,對應密碼, 以逗點隔開, 檢查點 3/7 email_data = open(\"z:/2017fall/mail.txt\").read() email, email_password= email_data.split(\",\") print(email, email_password) # 是否登入所提供寄信的電子郵箱, 4/7 server.login(email, email_password) # 不同課程名稱, 與對應主機名稱, 必須配合修改 5/7 course_title = \"計算機程式\" fossil_server = \"cpb.kmol.info\" for student_num in student_list: username = student_num repository = username + '.fossil' # 利用所提供的字串, 以亂數組成六個字元的密碼 password = id_generator(6, \"23456789abcdef\") print(student_num, \", \" , password) # 執行 dos command 指令, 建立倉儲 os.system(\"fossil init -A \" +username + \" \" + repository) print(\"已經建立倉儲 \" + repository) # 執行 dos command 指令, 修改使用者密碼 os.system(\"fossil user password \" + username + \" \" + password + \" -R \" + repository) print(\"已經修改密碼\") # 利用 Gmail 寄信, 告知各學員倉儲連結與帳號密碼 # 每一位學員收到的 output 都從這裡 reset output = \"\" # 若學號欄為空, 則不寄信 if student_num != \"\": # output 為寄給每一位學員的資料表格 mail_content = student_num+' 您好: 您在 '+course_title+' 課程中的區域網路倉儲: https://'+fossil_server+'/'+student_num+' ' mail_content += '管理帳號為:'+ student_num + ' 管理密碼為: '+ password+' ' print(student_num) print(mail_content) # 至此 mail_content 已經確定 # 在測試與實際寄送資料, 也必須配合修改, 檢查點 6/7 receiver_email = student_num + \"@gm.nfu.edu.tw\" # 測試用 #receiver_email = student_num+\"@mde.tw\" # 列出收信人 email 位址 #print(receiver_email) #message= MIMEText(mail_content,'plain','UTF-8') # 以 html 格式寄信 message= MIMEText(mail_content,'html','UTF-8') message['Subject'] = Header(course_title+\" Fossil SCM 帳號通知\", 'UTF-8') # 可以先不寄信, 確定格式正確後再開啟, 是否實際寄出信件, 檢查點 7/7 server.sendmail(\"gmail_address\", receiver_email, message.as_string()) server.quit() 各班所完成的主機: 二甲電腦輔助設計實習: https://cadpa.kmol.info 二乙電腦輔助設計實習: https://cadpb.kmol.info 一甲計算機程式: https://cpa.kmol.info 一乙計算機程式: https://cpb.kmol.info","tags":"Course","url":"https://40623113.github.io/40623113/w16/blog/2017-fall-cadp-w2.html"}]};