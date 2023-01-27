  module.exports = {
	    apps : [{
		        name: 'nextjs',
		        script: 'npm',
		        args:"start",
		        cwd:".",
		    	error_file: "/dev/null",
		    	out_file: "/dev/null",
		        instances: 1,
		        autorestart: true,
		        watch: false,
		        max_memory_restart: '1G',
		        env: {
				NEXT_PUBLIC_BE_URL:"https://my1000.biz/api"
				    },
		      }]
  };
