function removefirstOcc(s, ch) {
		// visit the given String from
		// the beginning
		for (var i = 0; i < s.length; i++) {
		// If ch is found
		if (s[i] === ch) {
			s1 = s.substring(0, i) ; // It will give "he"
             s2=s.substring(i + 1); // It will give "lo world" becuase we want to concatinate remaining string after i so we add 1
             s = s1+s2;       //concatinate both
            // also we can write s = s.substring(0, i)+s.substring(i + 1);
			break;
		}
		}
		return s;
	}

	var s = "hello world";
	var ch = "l";

	console.log(removefirstOcc(s, ch));


