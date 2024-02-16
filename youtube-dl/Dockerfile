FROM ubuntu

WORKDIR /mydir

RUN apt-get update && apt-get install -y curl python3

# ?creates a symbolic link (shortcut) named python in the directory /usr/bin/ that points to the python3 
# ?executable located at /usr/bin/python3. This allows you to use the python command to execute Python3
# ?which is the default behavior on some systems.
RUN ln -s /usr/bin/python3 /usr/bin/python

RUN curl -L https://github.com/ytdl-org/youtube-dl/releases/download/2021.12.17/youtube-dl -o /usr/local/bin/youtube-dl
RUN chmod a+x /usr/local/bin/youtube-dl

ENV LC_ALL=C.UTF-8

# Replacing CMD with ENTRYPOINT
ENTRYPOINT [ "/usr/local/bin/youtube-dl" ]

CMD [ "https://imgur.com/JY5tHqr" ]
