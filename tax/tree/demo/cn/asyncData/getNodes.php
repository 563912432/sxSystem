�}-�  6  ]�ϵN��b    ��� O���-I�]چ�wx��@�4��I*S��u:� Ĕ�+	_�T*��O-��FN���m��M�!}�96M��n���'�)�޿�CgBY.Nz�&��YI7��i �F6�[����v�+�3��������]��{��)O�V�{+��9�P��V/�kw�\48 -��&���4�+��(R����a����P-n�6��b�I�X�^�)��b��S��.z!���Ậ^u/�\<%��D����^��8ȿ����tGȝ⋜����֢e���O߆���iF'�
S���wU ���z���o�<�vyXz�a-�/�?D����̻�|7�N�l���A�2��z �7Tls��~h�B`,0Z���)��
����4ZV� hGOr�@����뫘߸�k���n������	��w@t+ǅo\pb�6R��s�]@�v�@���=6[�\�[��)�I�ڣjj|���8ほ<ر�ut>�kD�{htmlspecialchars($pId);

$pName = htmlspecialchars($pName);

//for ($i=1; $i<9999; $i++) {
//	for ($j=1; $j<999; $j++) {
//
//	}
//}

for ($i=1; $i<5; $i++) {
	$nId = $pId.$i;
	$nName = $pName."n".$i;
	echo "{ id:'".$nId."',	name:'".$nName."',	isParent:".(( $pLevel < "2" && ($i%2)!=0)?"true":"false").($pCheck==""?"":((($pLevel < "2" && ($i%2)!=0)?", halfCheck:true":"").($i==3?", checked:true":"")))."}";
	if ($i<4) {
		echo ",";
	}
}
?>]
