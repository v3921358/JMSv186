// Packet Debugging Script

function test(c) {
	var p = c.getOutPacket();
	p.writeShort(0x00AD);
	p.writeInt(0x00007DBC); // �����~�g
	p.writeInt(-1); // �_���[�W
	p.writeZeroBytes(100);
	// ProcessPacket
	c.DebugPacket(p.getPacket());
}

// �l���X�̃��b�Z�[�W
function ShopClose(c) {
	var p = c.getOutPacket();
	// �����n����
	p.writeShort(0x015F);
	// ���鏈��
	p.write(0x0A);
	// ����
	p.write(0);
	// ���b�Z�[�W
	p.write(20);
	/*
		0	=	�Ȃ�
		2	=	�Ȃ�
		4	=	�Ȃ�
		7-13=	�Ȃ�
		15	=	���Ԍo�߂Ŏ����ޏꂳ��܂����B�ē��ꂪ�s�\�ł��B(�t���}�����֎����I�ɔ�΂����@�\)
		16-36	�Ȃ�

		�c�Ƌ���
		1	=	�����ł̓I�[�v���o���܂���B(�o�X���̏ꏊ)
		3	=	���X�����Ă��܂�(�X)
		5	=	�����ޏꂳ��܂����B(�Ǖ�)
		6	=	�������Ԃ��o�߂��A���X���J�����Ƃ��ł��܂��񂵂�(�ꏊ���h�~�̋@�\)
		14	=	�i���͔���؂�ł��B(����؂ꂽ�ꍇ�̋����X)

		�ٗp���l
		17	=	�C�x���g���ɋ󂫂��Ȃ��ƃA�C�e���̓X�g�A�[�o���NNPC�̃v���h���b�N�̂Ƃ���ŒT���ׂ��ł��B�X���܂����H
		18	=	�c�Ǝ��Ԃ��߂��ĕX���܂��B
		20	=	(���b�Z�[�W�_�C�A���O�Ȃ��ŕ���)

		�ٗp���l���u�Ǘ��@
		19	=	�}�b�v���ړ�����A���u�Ǘ��@�g�p���ؒf����܂����B���΂炭�A��ɂ܂����p���������B
	*/
	c.DebugPacket(p.getPacket());
}

// �l���X�̃��b�Z�[�W (���v���C���[���_)
function ShoppingClose(c) {
	var p = c.getOutPacket();
	// �����n����
	p.writeShort(0x015F);
	// ���鏈��
	p.write(0x0A);
	// ����
	p.write(1);
	// ���b�Z�[�W
	p.write(10);
	/*
		0	=	???
		4	=	???
		10
		11
		16
		21

		�c�Ƌ���
		1	=	�����ł̓I�[�v���o���܂���B
		3	=	���X�����Ă��܂��B
		5	=	�����ޏꂳ��܂����B
		6	=	�������Ԃ��o�߂��A���X���J�������ł��܂��񂵂��B
		14	=	�i���͔���؂�ł��B
		15	=	���Ԓ��߂Ŏ����ޏꂳ��܂����B�ē��ꂪ�s�\�ł��B
		~27		�Ȃ�

		�ٗp���l
		6	=	�������Ԃ��o�߂��A���X���J�������ł��܂��񂵂��B
		17	=	���X�̎�l�����i�������ł������܂��B�������΂炭��ł����p���������B
		18	=	�c�Ǝ��Ԃ��߂��ĕX���܂��B
		19	=	�}�b�v���ړ�����A���u�Ǘ��@�g�p���ؒf����܂����B���΂炭�A��ɂ܂����p���������B
		20	=	(���b�Z�[�W�_�C�A���O�Ȃ��ŕ���)
		~29		�Ȃ�

		����
		2	=	���肪�������������܂����B
		7	=	�������I���܂����B���ʂ��m�F���Ă��������B
		8	=	�����Ɏ��s���܂����B
		9	=	�P�̂ݏ����\�ȃA�C�e���������Č����Ɏ��s���܂����B
		12	=	���肪�ʂ̃}�b�v�ɂ���׌����ł��܂���B
		13	=	�Q�[���t�@�C������������A�C�e��������ł��܂���B�Q�[���Đݒu�������x�����Ă��������B

		�Q�[��(�_�o����)
		0	=	��������ޏꂵ�܂����B
		2	=	�g�[�i�����g���I���܂����B10�b��Ɏ����I�Ƀ��[����������܂��B(�`���b�g)
		3	=	�����������܂���
		4	=	��������ޏꂵ�܂����B
		5	=	�����ޏꂳ��܂����B
	*/
	c.DebugPacket(p.getPacket());
}

// �Q�[��
function Gaming(c) {
	var p = c.getOutPacket();
	// �����n����
	p.writeShort(0x015F);
	// �Ȃ�炩?
	p.write(0x3D);
	p.writeInt(1);
	p.writeInt(1);
	p.writeInt(2);
	/*
		0x37	���v���C���[��READY!!���
		0x38	���v���C���[��READY!!��Ԃ��L�����Z��
		0x39
		0x3A	�v���C���[�̃^�[��(�Ԙg)
		0x3B	YOU WIN(0), DRAW(1)

	*/
	p.writeZeroBytes(100);
	c.DebugPacket(p.getPacket());
}

// �Q�[��
function AvaTrade(c) {
	var p = c.getOutPacket();
	p.writeShort(0x015F);
	p.write(2);
	p.write(6);
	/*
		3	=	����
		6	=	�|�C���g����
	*/
	p.writeMapleAsciiString("�����~�gX");
	p.writeInt(1);
	p.writeZeroBytes(100);
	c.DebugPacket(p.getPacket());
}

function UpdateTama(c) {
	var p = c.getOutPacket();
	p.writeShort(0x016A);
	p.writeInt(7777);
}

// Java����Ă΂��
function debug(c) {
	UpdateTama(c);
}