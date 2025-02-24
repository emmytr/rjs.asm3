import { useState } from "react";
import { FaFacebookMessenger } from "react-icons/fa";
import classes from './Livechat.module.css'
import { FaPaperclip } from "react-icons/fa"; // Attachment icon
import { FaRegSmile } from "react-icons/fa"; // Emoji icon
import { IoSend } from "react-icons/io5";   // Send icon
import { FaUserShield } from "react-icons/fa"; // Admin avatar icon



function LiveChat() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={classes.liveChatContainer}>
            {/* Floating Button */}
            <button className="chatToggleBtn" onClick={() => setIsOpen(!isOpen)}>
                <FaFacebookMessenger size={24} />
            </button>

            {/* Chat Popup */}
            {isOpen && (
                <div className={classes.chatPopup}>
                    <div className={classes.chatHeader}>
                        <h3>Customer Support</h3>
                        <div>Let's Chat App</div>
                    </div>
                    <div className={classes.chatBody}>
                        <div className={classes.chatCustomer}>
                            <p>Xin chào</p>
                            <p>Làm thế nào để xem các sản phẩm</p>
                        </div>
                        <div className={classes.chatSupport}>
                            <div className={classes.adminMessage}>
                                <FaUserShield size={24} className={classes.adminAvatar} />
                                <p>Chào bạn</p>
                            </div>
                            <div className={classes.adminMessage}>
                                <FaUserShield size={24} className={classes.adminAvatar} />
                                <p>Bạn có thể vào mục Shop để xem các sản phẩm</p>
                            </div>
                        </div>
                    </div>
                    <div className={classes.chatFooter}>
                        <FaUserShield size={30} className={classes.adminAvatarFooter} />
                        <input type="text" placeholder="Type a message..." />
                        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                            <FaPaperclip size={24} color="grey" style={{ cursor: "pointer" }} />
                            <FaRegSmile size={24} color="grey" style={{ cursor: "pointer" }} />
                            <IoSend size={24} color="blue" style={{ cursor: "pointer" }} />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default LiveChat;
