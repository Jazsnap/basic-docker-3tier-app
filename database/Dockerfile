FROM postgres:13.12

# Create a non-root user called jason with UID 1000 and greate a group with GID 1000 for user jason
RUN addgroup --gid 1000 jason && \
    adduser --home /home/jason --shell /usr/bin/bash --uid 1000 --gid 1000 --gecos "" --disabled-password jason && \
    mkdir -p /opt/jason

# Set timezone to UTC
ENV TZ=CET

# HEALTHCHECK --interval=30s --timeout=5s CMD node healthcheck.js