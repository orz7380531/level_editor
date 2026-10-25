/**
 * ============================================================
 *  虫子大作战 — 全局可调参数配置（CGJ 版）
 *  修改这里的数值，游戏和编辑器都会自动响应。
 *  所有单位：像素、百分比、秒。
 * ============================================================
 */
const CFG = {

  /* ───────── 画布 / 视口 ───────── */
  CANVAS_W: 960,          // 画布宽（16:9）
  CANVAS_H: 540,          // 画布高（16:9）
  GRAVITY: 1400,          // 重力加速度（px/s²）
  MAX_FALL_SPEED: 800,    // 最大下落速度

  /* ───────── 玩家移动 ───────── */
  PLAYER_W: 24,           // 玩家碰撞体宽
  PLAYER_H: 20,           // 玩家碰撞体高
  PLAYER_SPEED: 220,      // 水平移速
  PLAYER_ACCEL: 800,      // 水平加速度
  PLAYER_FRICTION: 600,   // 地面摩擦力

  /* ───────── 玩家跳跃 ───────── */
  JUMP_VEL_FULL: -520,    // 饱腹≥80% 时的跳跃初速度（越大跳越高）
  JUMP_VEL_HALF: -340,    // 饱腹=50% 时的跳跃初速度
  JUMP_VEL_EMPTY: -200,   // 饱腹=0% 时的跳跃初速度
  DOUBLE_JUMP_THRESHOLD: 50, // 饱腹低于此值 → 禁用二段跳
  DOUBLE_JUMP_VEL: -420,  // 二段跳初速度
  JUMP_BUFFER_MS: 120,    // 跳跃缓冲（落地前多少ms按跳仍有效）
  COYOTE_MS: 80,          // 土狼时间（离开平台后多久仍可跳）
  JUMP_HOLD_GRAVITY_MULT: 0.4,  // 按住跳跃键上升时重力倍率（越小跳越高）
  JUMP_CUT_FACTOR: 0.35,        // 松开跳跃键时上升速度削减比例

  /* ───────── 饱腹度（0~100） ───────── */
  HUNGER_MAX_START: 80,   // 每局开始最高饱腹度
  HUNGER_DECAY: 0.7,      // 每秒衰减量
  HUNGER_FOOD_VALUE: 10,  // 一份食物增加的量
  HUNGER_BABY_THRESHOLD: 80, // 超过此值触发繁殖（小虫子）
  HUNGER_EAT_BABY_GAIN: 15,  // 吃掉小虫子恢复的饱腹度

  /* ───────── 小虫子 ───────── */
  BABY_INITIAL_W: 8,      // 小虫子初始宽
  BABY_INITIAL_H: 6,      // 小虫子初始高
  BABY_GROW_RATE: 2.5,    // 每秒增长宽度（px）
  BABY_MAX_SAFE_W: 20,    // 超过此宽度 → 会吃掉玩家
  BABY_FOLLOW_SPEED: 100, // 跟随玩家速度
  BABY_FOOD_RANGE: 150,   // 探测食物距离
  BABY_EAT_RATIO: 0.3,    // 食物被小虫子抢走的比例

  /* ───────── 敌人：巨大皮鞋 ───────── */
  SHOE_W: 48,             // 皮鞋默认宽
  SHOE_H: 32,             // 皮鞋默认高
  SHOE_SPEED: 60,         // 移动速度（巡逻模式）
  SHOE_GAP_W: 24,         // 皮鞋中间空隙宽
  SHOE_KEYFRAME_DEFAULT_SPEED: 80, // 关键帧模式下的移动速度倍率

  /* ───────── 敌人：蟑螂药 ───────── */
  SPRAY_RADIUS: 120,      // 致死范围半径（默认，编辑器可调；进入即死）

  /* ───────── 可推动方块 ───────── */
  PUSHABLE_W: 32,
  PUSHABLE_H: 32,
  PUSHABLE_SPEED: 80,     // 被推时的移速
  PUSHABLE_FRICTION_GROUND: 0.92, // 地面摩擦力（越小滑得越远）
  PUSHABLE_FRICTION_AIR: 0.98,    // 空中摩擦力

  /* ───────── 可破坏方块 ───────── */
  DESTRUCTIBLE_W: 32,
  DESTRUCTIBLE_H: 32,

  /* ───────── 压力板 / 巢穴 / 冰箱 ───────── */
  PRESSURE_W: 48,
  PRESSURE_H: 12,
  NEST_W: 40,
  NEST_H: 40,
  FRIDGE_W: 56,
  FRIDGE_H: 80,

  /* ───────── 关卡 ───────── */
  LEVEL_W: 960,           // 单屏16:9，无横向滚动
  // 多关卡：每关一屏 960×540，下一关文件名
  NEXT_LEVEL: 'level2',   // 下一关的关卡名（对应 levels/level2.js），空='' 表示最后一关

  /* ───────── 咬技能 ───────── */
  KEY_BITE: 'KeyJ',       // 咬键：J
  BITE_RANGE: 40,         // 咬的范围（像素，玩家前方矩形检测区）
  BITE_COOLDOWN: 0.25,    // 咬冷却时间（秒）

  /* ───────── 过场动画 ───────── */
  CUTSCENE_ZOOM_SPEED: 2.5, // 放大动画速度（倍/秒）
  CUTSCENE_BUBBLE_DUR: 2.0, // 气泡持续时间（秒）
  CUTSCENE_SUBTITLE_DUR: 3.0,// 字幕持续时间（秒）

  /* ───────── 洞口传送 ───────── */
  WORMHOLE_W: 32,
  WORMHOLE_H: 40,

  /* ───────── 键盘映射 ───────── */
  KEY_LEFT:  ['ArrowLeft',  'KeyA'],
  KEY_RIGHT: ['ArrowRight', 'KeyD'],
  KEY_JUMP:  ['ArrowUp',    'KeyW', 'Space'],
  KEY_SUICIDE: 'KeyK',
};
