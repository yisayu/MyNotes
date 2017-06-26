###网络编程三要素之ip
###26.02_网络编程(网络编程三要素之IP概述)(掌握)
* 每个设备在网络中的唯一标识
* 每台网络终端在网络中都有一个独立的地址，我们在网络中传输数据就是使用这个地址。 
* ipconfig：查看本机IP192.168.12.42
* ping：测试连接192.168.40.62
* 本地回路地址：127.0.0.1(自己测试自己) 255.255.255.255是广播地址(广播给别人)
* IPv4：4个字节组成，4个0-255。大概42亿，30亿都在北美，亚洲4亿。2011年初已经用尽。 
* IPv6：8组，每组4个16进制数。
* 1a2b:0000:aaaa:0000:0000:0000:aabb:1f2f
* 1a2b::aaaa:0000:0000:0000:aabb:1f2f
* 1a2b:0000:aaaa::aabb:1f2f
* 1a2b:0000:aaaa::0000:aabb:1f2f
* 1a2b:0000:aaaa:0000::aabb:1f2f

###26.03_网络编程(网络编程三要素之端口号概述)(掌握)
* 每个程序在设备上的唯一标识(具体找到某个应用)
* 每个网络程序都需要绑定一个端口号，传输数据的时候除了确定发到哪台机器上，还要明确发到哪个程序。
* 端口号范围从0-65535
* 编写网络应用就需要绑定一个端口号，尽量使用1024以上的，1024以下的基本上都被系统程序占用了。
* 常用端口
	* mysql: 3306
	* oracle: 1521
	* web: 80
	* tomcat: 8080
	* QQ: 4000
	* feiQ: 2425

###26.04_网络编程(网络编程三要素协议)(掌握)
* 为计算机网络中进行数据交换而建立的规则、标准或约定的集合。
* UDP
	* 面向无连接，数据不安全，速度快。不区分客户端与服务端。
* TCP
　　* 面向连接（三次握手），数据安全，速度略低。分为客户端和服务端。
	* 三次握手: 客户端先向服务端发起请求, 服务端响应请求, 传输数据

###26.05_网络编程(Socket通信原理图解)(了解)
* A:Socket套接字概述：(Socket == 插座)  
	* 网络上具有唯一标识的IP地址和端口号组合在一起才能构成唯一能识别的标识符套接字。
	* 通信的两端都有Socket。
	* 网络通信其实就是Socket间的通信。
	* 数据在两个Socket间通过IO流传输。
	* Socket在应用程序中创建，通过一种绑定机制与驱动程序建立关系，告诉自己所对应的IP和port。

###26.06_网络编程(UDP传输)(了解)
* 1.发送Send
	* 创建DatagramSocket, 随机端口号
	* 创建DatagramPacket, 指定数据, 长度, 地址, 端口
	* 使用DatagramSocket发送DatagramPacket
	* 关闭DatagramSocket
* 2.接收Receive
	* 创建DatagramSocket, 指定端口号
	* 创建DatagramPacket, 指定数组, 长度
	* 使用DatagramSocket接收DatagramPacket
	* 关闭DatagramSocket
	* 从DatagramPacket中获取数据
* 3.接收方获取ip和端口号
	* String ip = packet.getAddress().getHostAddress();
	* int port = packet.getPort();

###26.16_网络编程(TCP协议)(掌握)
* 1.客户端
	* 创建Socket连接服务端(指定ip地址,端口号)通过ip地址找对应的服务器
	* 调用Socket的getInputStream()和getOutputStream()方法获取和服务端相连的IO流
	* 输入流可以读取服务端输出流写出的数据
	* 输出流可以写出数据到服务端的输入流
* 2.服务端
	* 创建ServerSocket(需要指定端口号)
	* 调用ServerSocket的accept()方法接收一个客户端请求，得到一个Socket
	* 调用Socket的getInputStream()和getOutputStream()方法获取和客户端相连的IO流
	* 输入流可以读取客户端输出流写出的数据
	* 输出流可以写出数据到客户端的输入流

###26.17_网络编程(TCP协议代码优化)
* 客户端

		Socket socket = new Socket("127.0.0.1", 9999);		//创建Socket指定ip地址和端口号
		InputStream is = socket.getInputStream();			//获取输入流
		OutputStream os = socket.getOutputStream();			//获取输出流
		BufferedReader br = new BufferedReader(new InputStreamReader(is));
		PrintStream ps = new PrintStream(os);
		
		System.out.println(br.readLine());
		ps.println("我想报名就业班");
		System.out.println(br.readLine());
		ps.println("爷不学了");
		socket.close();
* 服务端

		ServerSocket server = new ServerSocket(9999);	//创建服务器
		Socket socket = server.accept();				//接受客户端的请求
		InputStream is = socket.getInputStream();		//获取输入流
		OutputStream os = socket.getOutputStream();		//获取输出流
		
		BufferedReader br = new BufferedReader(new InputStreamReader(is));
		PrintStream ps = new PrintStream(os);
		
		ps.println("欢迎咨询传智播客");
		System.out.println(br.readLine());
		ps.println("报满了,请报下一期吧");
		System.out.println(br.readLine());
		server.close();
		socket.close();

###26.18_网络编程(服务端是多线程的)(掌握)
	ServerSocket server = new ServerSocket(9999);	//创建服务器
		while(true) {
			final Socket socket = server.accept();				//接受客户端的请求
			new Thread() {
				public void run() {
					try {
						BufferedReader br = new BufferedReader(new InputStreamReader(socket.getInputStream()));
						PrintStream ps = new PrintStream(socket.getOutputStream());
						ps.println("欢迎咨询传智播客");
						ps.println("报满了,请报下一期吧");
						System.out.println(br.readLine());
						socket.close();
					} catch (IOException e) {
						e.printStackTrace();
					}
				}
			}.start();
		}
	}