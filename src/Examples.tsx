import { motion, useMotionValue, useTransform } from "framer-motion";
import React from "react";
import { styled } from "@stitches/react";



const bg = "linear-gradient(90deg,#ffa0ae 0%,#aacaef 75%)";
export const Example1 = () => {
  return (
    
    <div style={{ marginBottom: "50px" }}>
      <p>Example 1</p>
      <motion.div
        style={{
          background: "linear-gradient(90deg,#ffa0ae 0%,#aacaef 75%)",
          height: "100px",
          width: "100px",
          borderRadius: "10px"
        }}
        initial={{
          x: 0
        }}
        animate={{
          x: 200
        }}
        /**
          디폴트 애니메이션
        **/
      />
    </div>
  );
};
const Button = styled("button", {});

export const Example2 = () => {
  return (
    <div style={{ marginBottom: "50px" }}>
      <p>Example 2</p>
      <motion.div
        style={{
          background: "linear-gradient(90deg,#ffa0ae 0%,#aacaef 75%)",
          height: "100px",
          width: "100px",
          borderRadius: "10px"
        }}
        /**
        두 개의 다른 애니메이션 오케스트레이션
        **/
        initial={{
          rotate: 0,
          x: -200
        }}
        animate={{
          rotate: 180,
          x: 200
        }}
        transition={{
          type: "tween",
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse",
          repeatDelay: 1,
          duration: 2
        }}
      />
    </div>
  );
};

// export const Example3 = () => {
//     return (
        
//       <motion.div
//         className="box"
//         animate={{
//           scale: [1, 2, 2, 1, 1],
//           rotate: [0, 0, 180, 180, 0],
//           borderRadius: ["0%", "0%", "50%", "50%", "0%"]
//         }}
//         transition={{
//           duration: 2,
//           ease: "easeInOut",
//           times: [0, 0.2, 0.5, 0.8, 1],
//           repeat: Infinity,
//           repeatDelay: 1
//         }}
//       />
//     );
//   }


export const Examples = ({ _ }: { _: string }) => (
  <div key={_} style={{ width: "1000px" }}>
    <h2>달려온다잉 고고고</h2>
    <ParentChildOrchestration />
    {/* <Example1 />
    <Example2 /> */}
    <h2>계속 돈다잉 고고고</h2>
    <RotateWithSize />
    <h2>클릭 하는순간 복붙</h2>
    <CopyToClipboardButton />
    <h2>계속 떨어진다 고고고</h2>
    <RepeatExample />
    <h2>동물들아 나와라</h2>
    <Replys />
  </div>
);
const buttonVariants = {
  hover: (isClicked: boolean) => ({
    scale: isClicked ? 2 : 3,
    rotate: isClicked ? 0 : 360
  }),
  pressed: {
    scale: 0.95
  },
  clicked: {
    scale: 2
  },
  notClicked: {
    scale: 1
  }
};
export const AnimatedButton = () => {
  const [isClicked, setIsClicked] = React.useState(false);

  React.useEffect(() => {
    if (isClicked) {
      setTimeout(() => setIsClicked(false), 3000);
    }
  }, [isClicked]);

  const duration = 0.6;

  return (
    <motion.button
      style={{
        background: "linear-gradient(90deg,#ffa0ae 0%,#aacaef 75%)",
        color: "black",
        border: "none",
        height: "50px",
        width: "200px",
        borderRadius: "10px",
        cursor: isClicked ? "default" : "pointer",
        outline: "none",
        boxShadow: "6px 4px 12px -6px rgba(0,24,40,0.25)"
      }}
      aria-label="Click Me!"
      title="Click Me!"
      onClick={() => {
        setIsClicked(true);
      }}
      /**
       * Here we pass the buttonVariants object as variants. It contains 4
       * different target objects
       * - hover: which is used for the whileHover prop
       * - pressed: which is used for the whileTap prop
       * - clicked and notClicked which are respecively used for animate prop
       * when the button is clicked and not clicked (based on the state of the
       * button)
       *
       * Reference to these animation objects are passed as strings to their
       * props
       *
       * e.g. whileHover="hover"
       */
      variants={buttonVariants}
      animate={isClicked ? "clicked" : "notClicked"}
      whileHover="hover"
      whileTap="pressed"
      custom={isClicked}
      transition={{
        duration
      }}
    >
      {isClicked ? "Clicked!" : "Click Me!"}
    </motion.button>
  );
};


const RotateWithSize = () => {
  const blockVariants = {
    initial: {
      rotate: 0
    },
    target: {
      rotate: 270
    }
  };

  const rotate = useMotionValue(0); // 변수이름 달라도 됨, 애니메이션 상태 구독
  const scale = useTransform(rotate, [0, 270], [0, 1]); // 변수이름 달라도 된다. 
 
  return (
    
    <center>
    <motion.div

    
      style={{
        background: "linear-gradient(90deg,#ffa0ae 0%,#aacaef 75%)",
        height: "100px",
        width: "100px",
        borderRadius: "10px",
        rotate, // rotate: rotate 와 동일
        scale,  // scale : scale 과 동일 
      }}
      
      variants={blockVariants}
      initial="initial"
      animate="target"
      transition={{
        ease: "easeInOut",
        duration: 5,
        repeat : 100,
        repeatType : "reverse"

        
      }}
    />
    </center>
  );
};




const CopyToClipboardButton = () => {
  const duration = 0.4;

  const clipboardIconVariants = {
    clicked: { opacity: 0 },
    unclicked: { opacity: 1 }
  };

  const checkmarkIconVariants = {
    clicked: { pathLength: 1 },
    unclicked: { pathLength: 0 }
  };

  const [isClicked, setIsClicked] = React.useState(false);

  const pathLength = useMotionValue(0);
  const opacity = useTransform(pathLength, [0, 0.5], [0, 1]);

  return (
    <Button
      css={{
        background: "transparent",
        border: "none",
        cursor: isClicked ? "default" : "pointer",
        outline: "none",
        marginBottom: "20px"
      }}
      aria-label="Copy to clipboard"
      title="Copy to clipboard"
      disabled={isClicked}
      onClick={() => {
        setIsClicked((prev) => !prev);
      }}
    >
      <svg
        width="100"
        height="100"
        viewBox="0 0 25 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          d="M20.8511 9.46338H11.8511C10.7465 9.46338 9.85107 10.3588 9.85107 11.4634V20.4634C9.85107 21.5679 10.7465 22.4634 11.8511 22.4634H20.8511C21.9556 22.4634 22.8511 21.5679 22.8511 20.4634V11.4634C22.8511 10.3588 21.9556 9.46338 20.8511 9.46338Z"
          stroke="#949699"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={false}
          animate={isClicked ? "clicked" : "unclicked"}
          variants={clipboardIconVariants}
          transition={{ duration }}
        />
        <motion.path
          d="M5.85107 15.4634H4.85107C4.32064 15.4634 3.81193 15.2527 3.43686 14.8776C3.06179 14.5025 2.85107 13.9938 2.85107 13.4634V4.46338C2.85107 3.93295 3.06179 3.42424 3.43686 3.04917C3.81193 2.67409 4.32064 2.46338 4.85107 2.46338H13.8511C14.3815 2.46338 14.8902 2.67409 15.2653 3.04917C15.6404 3.42424 15.8511 3.93295 15.8511 4.46338V5.46338"
          stroke="#949699"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={false}
          animate={isClicked ? "clicked" : "unclicked"}
          variants={clipboardIconVariants}
          transition={{ duration }}
        />
        <motion.path
          d="M20 6L9 17L4 12"
          stroke="#5184f9"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={false}
          animate={isClicked ? "clicked" : "unclicked"}
          variants={checkmarkIconVariants}
          style={{ pathLength, opacity }}
          transition={{ duration }}
        />
      </svg>
    </Button>
  );
};

const RepeatExample = () => {
  const blockVariants = {
    initial: {
      y: -10  // 처음 시작하는 시작점
    },
    target: {
      y: 200  // 떨어지는 마지막점
    }
  };

  return (
    <div style={{ height: "400px" }}>
        <center>
      <motion.div
        style={{
          background: "linear-gradient(90deg,#ffa0ae 0%,#aacaef 75%)",
          height: "100px",
          width: "100px",
          borderRadius: "50%"
        }}
        variants={blockVariants}
        initial="initial"
        animate="target"
        transition={{
          ease: "easeInOut",
          duration: 0.7,
          delay: 2,
          repeat: 100,
          repeatType: "loop",
          repeatDelay: 3
        }}
      />
      </center>
    </div>
  );
};

const ParentChildOrchestration = () => {
  const boxVariants = {
    out: {
      y: 600
    },
    in: {
      y: 0,
      transition: {
        duration: 2,
        // The first child will appear AFTER the parrent has appeared on the screen
        delayChildren: 4,
        // The next sibling will appear 0.5s after the previous one
        staggerChildren: 0.5
      }
    }
  };

  const iconVariants = {
    out: {
      x: -200,
      opacity: "0"
    },
    in: {
      x: 0,
      opacity: "100%"
    }
  };

  return (
    <motion.div
      variants={boxVariants}
      initial="out"
      animate="in"
      style={{ background: bg, borderRadius: "10px" }}
    >
      <motion.div
        role="img"
        aria-labelledby="magic wand"
        variants={iconVariants}
      >
        🚀
      </motion.div>
      <motion.div role="img" aria-labelledby="sparkles" variants={iconVariants}>
        ✨
      </motion.div>
      <motion.div role="img" aria-labelledby="sparkles" variants={iconVariants}>
        🎉
      </motion.div>
    </motion.div>
  );
};


const Replys = () => {
  const replies = [
    
    {
      id: "1",
      photo: "🐶"
    },
    {
      id: "2",
      photo: "🐱"
    },
    {
      id: "3",
      photo: "🐰"
    },
    {
      id: "4",
      photo: "🐭"
    },
    {
      id: "5",
      photo: "🐹"
    },
    {
      id: "6",
      photo: "🦊"
    },
    {
      id: "7",
      photo: "🐻"
    },
    {
      id: "8",
      photo: "🐼"
    },
    {
      id: "9",
      photo: "🐨"
    },
    

  ];
 
  const list = {
    visible: {
      opacity: 1,
      transition: {
        // delayChildren: 1.5,
        staggerChildren: 0.1
      }
    },
    hidden: {
      opacity: 0
    }
  };

  const item = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -10 }
  };

  return (
    <>
      <h4>지금은 {replies.length} 마리 안녕 동물 친구들!</h4>
      <motion.ul
        style={{
          display: "flex",
          flexWrap: "wrap",
          marginLeft: "0px",
          marginBottom: "8px",
          marginTop: "15px"
        }}
        initial="hidden"
        animate="visible"
        variants={list}
      >
        {replies.map((reply) => (
          <motion.li
            style={{
              listStyle: "none",
              marginRight: "50px"
            }}
            key={reply.id}
            data-testid={reply.id}
            variants={item}
            whileHover={{
              // scale: 1.2,
              marginRight: "10px",
              transition: { ease: "easeOut" }
            }}
          >
            
            <div
              style={{
                background: "linear-gradient(90deg,#ffa0ae 0%,#aacaef 75%)",
                height: "50px",
                width: "50px",
                borderRadius: "50%",
                border: "3px solid #4C79DF",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                fontSize: "60px"
              }}
            >
              <span role="img" style={{ paddingRight: 0 }}>
                {reply.photo}
              </span>
            </div>
          </motion.li>
        ))}
      </motion.ul>
    </>
  );
};
