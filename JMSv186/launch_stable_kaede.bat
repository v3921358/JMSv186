@echo off
@title �����ŃT�[�o�[(�����)
set CLASSPATH=.;stable\*
java -server -Dnet.sf.odinms.wzpath=wz\ -Djavax.net.ssl.keyStore=filename.keystore -Djavax.net.ssl.keyStorePassword=passwd -Djavax.net.ssl.trustStore=filename.keystore -Djavax.net.ssl.trustStorePassword=passwd server.Start
pause