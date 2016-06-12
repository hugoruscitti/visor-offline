import os

video_path_linux_osx = os.path.expanduser("~/videos")
video_path_windows = "c:\\videos"

if (os.path.exists(video_path_linux_osx)):
  video_path = video_path_linux_osx
elif os.path.exists(video_path_windows):
  video_path = video_path_windows
else:
  print("ERROR, no se encuentran ninguno de los directorios de videos.")
  print("%s [no se encuentra]" %(video_path_linux_osx))
  print("%s [no se encuentra]" %(video_path_windows))
  os.exit(1)

thumb_folder = os.path.join(video_path, "thumbs")
os.system("mkdir -p %s" %(thumb_folder))


for x in os.listdir(video_path):
  if x.lower().endswith('.mp4'):
    print("Creando miniatura para: '%s'" %(x))
    video_input = os.path.join(video_path, x)
    file_output = os.path.join(video_path, "thumbs", os.path.basename(video_input).replace(".mp4", ".jpg"))
    os.system("ffmpegthumbnailer -i '%s' -o '%s' -s400" %(video_input, file_output))
