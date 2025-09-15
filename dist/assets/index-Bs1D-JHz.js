const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/LeaderboardTab-B3yOThpW.js","assets/react-vendor-Cxdu5FWc.js","assets/vendor-vU7BIIlf.js","assets/firebase-DnFTZRb-.js","assets/DashboardTab-B-t7cCvY.js","assets/CompletionScreen-1IYF7fnv.js","assets/AuthModal-CRgIlNXA.js"])))=>i.map(i=>d[i]);
import { r as reactExports, R as React, j as jsxRuntimeExports, X, S as Save, U as User, a as SquarePen, L as LogOut, b as LogIn, c as Undo, d as Lightbulb, e as RotateCcw, A as AlertCircle, C as Calendar, f as Check, H as HelpCircle, g as Share2, h as Archive, T as Trophy, i as createRoot } from "./react-vendor-Cxdu5FWc.js";
import { i as initializeApp, a as initializeFirestore, g as getAuth, c as connectAuthEmulator, b as connectFirestoreEmulator, o as onAuthStateChanged, G as GoogleAuthProvider, s as signInWithPopup, d as createUserWithEmailAndPassword, u as updateProfile, e as signInWithEmailAndPassword, f as signOut, q as query, h as collection, w as where, j as getDocs, l as limit, T as Timestamp, k as addDoc } from "./firebase-DnFTZRb-.js";
import "./vendor-vU7BIIlf.js";
(function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) {
    return;
  }
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
    processPreload(link);
  }
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") {
        continue;
      }
      for (const node of mutation.addedNodes) {
        if (node.tagName === "LINK" && node.rel === "modulepreload")
          processPreload(node);
      }
    }
  }).observe(document, { childList: true, subtree: true });
  function getFetchOpts(link) {
    const fetchOpts = {};
    if (link.integrity) fetchOpts.integrity = link.integrity;
    if (link.referrerPolicy) fetchOpts.referrerPolicy = link.referrerPolicy;
    if (link.crossOrigin === "use-credentials")
      fetchOpts.credentials = "include";
    else if (link.crossOrigin === "anonymous") fetchOpts.credentials = "omit";
    else fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep)
      return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
})();
const scriptRel = "modulepreload";
const assetsURL = function(dep) {
  return "/games/nhl-duo/" + dep;
};
const seen = {};
const __vitePreload = function preload(baseModule, deps, importerUrl) {
  let promise = Promise.resolve();
  if (deps && deps.length > 0) {
    document.getElementsByTagName("link");
    const cspNonceMeta = document.querySelector(
      "meta[property=csp-nonce]"
    );
    const cspNonce = (cspNonceMeta == null ? void 0 : cspNonceMeta.nonce) || (cspNonceMeta == null ? void 0 : cspNonceMeta.getAttribute("nonce"));
    promise = Promise.allSettled(
      deps.map((dep) => {
        dep = assetsURL(dep);
        if (dep in seen) return;
        seen[dep] = true;
        const isCss = dep.endsWith(".css");
        const cssSelector = isCss ? '[rel="stylesheet"]' : "";
        if (document.querySelector(`link[href="${dep}"]${cssSelector}`)) {
          return;
        }
        const link = document.createElement("link");
        link.rel = isCss ? "stylesheet" : scriptRel;
        if (!isCss) {
          link.as = "script";
        }
        link.crossOrigin = "";
        link.href = dep;
        if (cspNonce) {
          link.setAttribute("nonce", cspNonce);
        }
        document.head.appendChild(link);
        if (isCss) {
          return new Promise((res, rej) => {
            link.addEventListener("load", res);
            link.addEventListener(
              "error",
              () => rej(new Error(`Unable to preload CSS for ${dep}`))
            );
          });
        }
      })
    );
  }
  function handlePreloadError(err) {
    const e = new Event("vite:preloadError", {
      cancelable: true
    });
    e.payload = err;
    window.dispatchEvent(e);
    if (!e.defaultPrevented) {
      throw err;
    }
  }
  return promise.then((res) => {
    for (const item of res || []) {
      if (item.status !== "rejected") continue;
      handlePreloadError(item.reason);
    }
    return baseModule().catch(handlePreloadError);
  });
};
const firebaseConfig = {
  apiKey: "AIzaSyDxsSRpmQUt41Q_JmPEcbAPgQzUrUNXV6Q",
  authDomain: "profootballnetwork-8e365.firebaseapp.com",
  projectId: "profootballnetwork-8e365",
  storageBucket: "profootballnetwork-8e365.appspot.com",
  messagingSenderId: "317914786543",
  appId: "1:317914786543:web:e93f8a514cbbc1e761491a",
  measurementId: "G-HZWEW0N3E8"
};
const app = initializeApp(firebaseConfig);
const firestoreSettings = {
  ignoreUndefinedProperties: true
};
const db = initializeFirestore(app, firestoreSettings, "leaderboards");
const nhlDb = initializeFirestore(app, firestoreSettings, "nhl-leaderboards");
const auth = getAuth(app);
if (typeof window !== "undefined" && window.location.hostname === "localhost") {
  try {
    if (!auth._delegate._config.emulator) {
      connectAuthEmulator(auth, "http://localhost:9099");
    }
  } catch (error) {
    console.log("Auth emulator connection skipped:", error.message);
  }
  try {
    if (typeof window !== "undefined" && window.location.hostname === "localhost") {
      connectFirestoreEmulator(db, "localhost", 8080);
    }
  } catch (error) {
    console.log("Firestore emulator connection skipped:", error.message);
  }
}
const GA_PREFIX = "GAME.NHL_DUO.";
const trackEvent = (eventName, parameters) => {
  if (typeof window !== "undefined" && window.gtag) {
    const fullEventName = `${GA_PREFIX}${eventName}`;
    console.log("GA4 Event:", fullEventName, parameters);
    window.gtag("event", fullEventName, parameters);
  }
};
const trackGameStart = (puzzleType, difficulty) => {
  trackEvent("game_start", {
    puzzle_type: puzzleType,
    difficulty: difficulty || "unknown",
    timestamp: (/* @__PURE__ */ new Date()).toISOString()
  });
};
const trackGameEnd = (gameStats) => {
  trackEvent("game_end", {
    moves: gameStats.moves,
    hints_used: gameStats.hintsUsed,
    time_taken_seconds: Math.floor(gameStats.timeTaken / 1e3),
    completed: gameStats.completed,
    timestamp: (/* @__PURE__ */ new Date()).toISOString()
  });
};
const trackCellClick = (row, col, newValue, moveNumber) => {
  trackEvent("cell_click", {
    row,
    col,
    new_value: newValue || "empty",
    move_number: moveNumber
  });
};
const trackHint = (hintsUsed, row, col) => {
  trackEvent("hint_used", {
    hints_used_total: hintsUsed,
    hint_row: row,
    hint_col: col
  });
};
const trackReset = (currentMoves, currentHints) => {
  trackEvent("game_reset", {
    moves_before_reset: currentMoves,
    hints_before_reset: currentHints
  });
};
const trackShare = (gameStats, shareMethod) => {
  trackEvent("share_result", {
    moves: gameStats.moves,
    hints_used: gameStats.hintsUsed,
    time_taken_seconds: Math.floor(gameStats.timeTaken / 1e3),
    share_method: shareMethod
  });
};
const trackRuleView = () => {
  trackEvent("rules_viewed", {
    timestamp: (/* @__PURE__ */ new Date()).toISOString()
  });
};
const trackArchiveView = () => {
  trackEvent("archive_viewed", {
    timestamp: (/* @__PURE__ */ new Date()).toISOString()
  });
};
const trackArchivePuzzleLoad = (date, success) => {
  trackEvent("archive_puzzle_load", {
    puzzle_date: date,
    success,
    timestamp: (/* @__PURE__ */ new Date()).toISOString()
  });
};
const trackPuzzleLoad = (success, puzzleType, error) => {
  trackEvent("puzzle_load", {
    success,
    puzzle_type: puzzleType,
    error: error || null,
    timestamp: (/* @__PURE__ */ new Date()).toISOString()
  });
};
const trackTabSwitch = (fromTab, toTab) => {
  trackEvent("tab_switch", {
    from_tab: fromTab,
    to_tab: toTab,
    timestamp: (/* @__PURE__ */ new Date()).toISOString()
  });
};
const trackLeaderboardView = (puzzleDate, userLoggedIn) => {
  trackEvent("leaderboard_view", {
    puzzle_date: puzzleDate,
    user_logged_in: userLoggedIn,
    timestamp: (/* @__PURE__ */ new Date()).toISOString()
  });
};
const trackLeaderboardRankView = (userRank, totalPlayers) => {
  trackEvent("leaderboard_rank_view", {
    user_rank: userRank,
    total_players: totalPlayers,
    timestamp: (/* @__PURE__ */ new Date()).toISOString()
  });
};
const trackDashboardView = (userLoggedIn) => {
  trackEvent("dashboard_view", {
    user_logged_in: userLoggedIn,
    timestamp: (/* @__PURE__ */ new Date()).toISOString()
  });
};
const trackUserStatsView = (totalGames, currentStreak) => {
  trackEvent("user_stats_view", {
    total_games: totalGames,
    current_streak: currentStreak,
    timestamp: (/* @__PURE__ */ new Date()).toISOString()
  });
};
const trackPendingGamesClick = (pendingCount, totalAvailable) => {
  trackEvent("pending_games_click", {
    pending_count: pendingCount,
    total_available: totalAvailable,
    timestamp: (/* @__PURE__ */ new Date()).toISOString()
  });
};
const trackLogout = () => {
  trackEvent("logout", {
    timestamp: (/* @__PURE__ */ new Date()).toISOString()
  });
};
const trackProfileEdit = () => {
  trackEvent("profile_edit", {
    timestamp: (/* @__PURE__ */ new Date()).toISOString()
  });
};
const trackProfileUpdate = (success) => {
  trackEvent("profile_update", {
    success,
    timestamp: (/* @__PURE__ */ new Date()).toISOString()
  });
};
const trackCompletionScreenView = (gameStats) => {
  trackEvent("completion_screen_view", {
    moves: gameStats.moves,
    hints_used: gameStats.hintsUsed,
    total_time_seconds: Math.floor(gameStats.totalTime / 1e3),
    timestamp: (/* @__PURE__ */ new Date()).toISOString()
  });
};
const trackCompletionScreenAction = (action) => {
  trackEvent("completion_screen_action", {
    action,
    timestamp: (/* @__PURE__ */ new Date()).toISOString()
  });
};
const trackCTAClick = (ctaType, location, userLoggedIn) => {
  trackEvent("cta_click", {
    cta_type: ctaType,
    location,
    user_logged_in: userLoggedIn,
    timestamp: (/* @__PURE__ */ new Date()).toISOString()
  });
};
const trackModalOpen = (modalType) => {
  trackEvent("modal_open", {
    modal_type: modalType,
    timestamp: (/* @__PURE__ */ new Date()).toISOString()
  });
};
const trackScoreSubmission = (success, gameStats, puzzleDate) => {
  trackEvent("score_submission", {
    success,
    moves: gameStats.moves,
    hints_used: gameStats.hintsUsed,
    total_time_seconds: Math.floor(gameStats.totalTime / 1e3),
    puzzle_date: puzzleDate,
    timestamp: (/* @__PURE__ */ new Date()).toISOString()
  });
};
const useAuth = () => {
  const [user, setUser] = reactExports.useState(null);
  const [loading, setLoading] = reactExports.useState(true);
  reactExports.useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user2) => {
      setUser(user2);
      setLoading(false);
    });
    return unsubscribe;
  }, []);
  const signInWithGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      return result.user;
    } catch (error) {
      const errorMessage = getErrorMessage(error);
      throw new Error(errorMessage);
    }
  };
  const signUp = async (email, password, displayName) => {
    try {
      if (password.length < 6) {
        throw new Error("Password must be at least 6 characters long");
      }
      const result = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(result.user, { displayName });
      await result.user.reload();
      const updatedUser = auth.currentUser;
      return updatedUser || result.user;
    } catch (error) {
      const errorMessage = getErrorMessage(error);
      throw new Error(errorMessage);
    }
  };
  const signIn = async (email, password) => {
    try {
      if (password.length < 6) {
        throw new Error("Password must be at least 6 characters long");
      }
      const result = await signInWithEmailAndPassword(auth, email, password);
      return result.user;
    } catch (error) {
      const errorMessage = getErrorMessage(error);
      throw new Error(errorMessage);
    }
  };
  const logout = async () => {
    try {
      trackLogout();
      await signOut(auth);
    } catch (error) {
      throw new Error(error.message);
    }
  };
  const getErrorMessage = (error) => {
    const errorCode = error.code || error.message;
    switch (errorCode) {
      case "auth/invalid-credential":
      case "auth/wrong-password":
      case "auth/user-not-found":
        return "Invalid email or password. Please check your credentials and try again.";
      case "auth/email-already-in-use":
        return "Email address already exists. Please sign in instead or use a different email.";
      case "auth/invalid-email":
        return "Please enter a valid email address.";
      case "auth/weak-password":
        return "Password must be at least 6 characters long.";
      case "auth/user-disabled":
        return "This account has been disabled. Please contact support.";
      case "auth/operation-not-allowed":
        return "Email/password accounts are not enabled. Please contact support.";
      case "auth/requires-recent-login":
        return "Please sign out and sign in again to complete this action.";
      case "auth/account-exists-with-different-credential":
        return "An account already exists with this email using a different sign-in method.";
      case "auth/credential-already-in-use":
        return "This credential is already associated with a different account.";
      case "auth/popup-closed-by-user":
        return "Sign-in was cancelled. Please try again.";
      case "auth/popup-blocked":
        return "Pop-up was blocked by your browser. Please allow pop-ups and try again.";
      case "auth/popup-blocked":
        return "Pop-up was blocked by your browser. Please allow pop-ups for this site and try again.";
      case "auth/cancelled-popup-request":
        return "Sign-in was cancelled. Please try again.";
      case "auth/missing-email":
        return "Please enter your email address.";
      case "auth/missing-password":
        return "Please enter your password.";
      case "auth/internal-error":
        return "Something went wrong. Please try again later.";
      case "auth/too-many-requests":
        return "Too many failed sign-in attempts. Please wait a few minutes and try again.";
      case "auth/network-request-failed":
        return "Network connection error. Please check your internet connection and try again.";
      case "Password must be at least 6 characters long":
        return "Password must be at least 6 characters long.";
      default:
        if (error.message && error.message.includes("Password")) {
          return "Password must be at least 6 characters long.";
        }
        if (error.message && error.message.includes("email")) {
          return "Please check your email address and try again.";
        }
        return "An unexpected error occurred. Please try again or contact support if the problem persists.";
    }
  };
  return {
    user,
    loading,
    signUp,
    signIn,
    signInWithGoogle,
    logout
  };
};
const HINT_PENALTY_SECONDS = 15;
const validateGrid = (grid, constraints) => {
  const violations = /* @__PURE__ */ new Set();
  const messages = [];
  const size = grid.length;
  for (let row = 0; row < size; row++) {
    for (let col = 0; col < size - 2; col++) {
      const cell1 = grid[row][col];
      const cell2 = grid[row][col + 1];
      const cell3 = grid[row][col + 2];
      if (cell1.value && cell2.value && cell3.value && cell1.value === cell2.value && cell2.value === cell3.value) {
        const symbol = cell1.value === "goal" ? `3 consecutive 🥅 in row ${row + 1}` : `3 consecutive 🏒 in row ${row + 1}`;
        messages.push(symbol);
        violations.add(`${row},${col}`);
        violations.add(`${row},${col + 1}`);
        violations.add(`${row},${col + 2}`);
      }
    }
  }
  for (let col = 0; col < size; col++) {
    for (let row = 0; row < size - 2; row++) {
      const cell1 = grid[row][col];
      const cell2 = grid[row + 1][col];
      const cell3 = grid[row + 2][col];
      if (cell1.value && cell2.value && cell3.value && cell1.value === cell2.value && cell2.value === cell3.value) {
        const symbol = cell1.value === "goal" ? `3 consecutive 🥅 in column ${col + 1}` : `3 consecutive 🏒 in column ${col + 1}`;
        messages.push(symbol);
        violations.add(`${row},${col}`);
        violations.add(`${row + 1},${col}`);
        violations.add(`${row + 2},${col}`);
      }
    }
  }
  for (let row = 0; row < size; row++) {
    const rowCells = grid[row].filter((cell) => cell.value !== null);
    const goals = rowCells.filter((cell) => cell.value === "goal").length;
    const sticks = rowCells.filter((cell) => cell.value === "stick").length;
    if (rowCells.length === size && goals !== sticks) {
      const goalCount = goals;
      const stickCount = sticks;
      if (goalCount > stickCount) {
        messages.push(`${goalCount} 🥅 in row ${row + 1} (should be ${size / 2})`);
      } else {
        messages.push(`${stickCount} 🏒 in row ${row + 1} (should be ${size / 2})`);
      }
      for (let col = 0; col < size; col++) {
        violations.add(`${row},${col}`);
      }
    }
  }
  for (let col = 0; col < size; col++) {
    const colCells = grid.map((row) => row[col]).filter((cell) => cell.value !== null);
    const goals = colCells.filter((cell) => cell.value === "goal").length;
    const sticks = colCells.filter((cell) => cell.value === "stick").length;
    if (colCells.length === size && goals !== sticks) {
      const goalCount = goals;
      const stickCount = sticks;
      if (goalCount > stickCount) {
        messages.push(`${goalCount} 🥅 in column ${col + 1} (should be ${size / 2})`);
      } else {
        messages.push(`${stickCount} 🏒 in column ${col + 1} (should be ${size / 2})`);
      }
      for (let row = 0; row < size; row++) {
        violations.add(`${row},${col}`);
      }
    }
  }
  constraints.forEach((constraint) => {
    const [r1, c1] = constraint.cell1;
    const [r2, c2] = constraint.cell2;
    const cell1 = grid[r1][c1];
    const cell2 = grid[r2][c2];
    if (cell1.value && cell2.value) {
      if (constraint.type === "equal" && cell1.value !== cell2.value) {
        messages.push(`Cells with = should be the same`);
        violations.add(`${r1},${c1}`);
        violations.add(`${r2},${c2}`);
      } else if (constraint.type === "different" && cell1.value === cell2.value) {
        messages.push(`Cells with × should be different`);
        violations.add(`${r1},${c1}`);
        violations.add(`${r2},${c2}`);
      }
    }
  });
  return { violations, messages };
};
const isGameCompleteAndValid = (grid, constraints) => {
  const size = grid.length;
  for (let row = 0; row < size; row++) {
    for (let col = 0; col < size; col++) {
      if (!grid[row][col].value) return false;
    }
  }
  const { violations } = validateGrid(grid, constraints);
  return violations.size === 0;
};
const getNextValue = (current) => {
  if (current === null) return "goal";
  if (current === "goal") return "stick";
  return null;
};
const getHint = (grid, solution) => {
  const size = grid.length;
  const emptyCells = [];
  for (let row = 0; row < size; row++) {
    for (let col = 0; col < size; col++) {
      if (!grid[row][col].value && !grid[row][col].isFixed) {
        emptyCells.push([row, col]);
      }
    }
  }
  if (emptyCells.length === 0) return null;
  const randomIndex = Math.floor(Math.random() * emptyCells.length);
  return emptyCells[randomIndex];
};
const useGameState = (dailyPuzzleData) => {
  const [gameState, setGameState] = reactExports.useState({
    grid: [],
    constraints: [],
    size: 6,
    isComplete: false,
    violations: /* @__PURE__ */ new Set(),
    violationMessages: []
  });
  const [gameStats, setGameStats] = reactExports.useState({
    moves: 0,
    hintsUsed: 0,
    startTime: Date.now(),
    endTime: void 0,
    baseTime: void 0,
    penaltyTime: void 0,
    totalTime: void 0,
    scoreSubmitted: false
  });
  const [showWinAnimation, setShowWinAnimation] = reactExports.useState(false);
  const [solution, setSolution] = reactExports.useState([]);
  const [history, setHistory] = reactExports.useState([]);
  const initializeGame = reactExports.useCallback(() => {
    if (!dailyPuzzleData) return;
    const grid = Array(dailyPuzzleData.size).fill(null).map(
      (_, row) => Array(dailyPuzzleData.size).fill(null).map((_2, col) => ({
        value: null,
        isFixed: false,
        row,
        col
      }))
    );
    dailyPuzzleData.preFilledCells.forEach(({ row, col, value }) => {
      grid[row][col].value = value;
      grid[row][col].isFixed = true;
    });
    const { violations, messages } = validateGrid(grid, dailyPuzzleData.constraints);
    setGameState({
      grid,
      constraints: dailyPuzzleData.constraints,
      size: dailyPuzzleData.size,
      isComplete: false,
      violations,
      violationMessages: messages
    });
    setSolution(dailyPuzzleData.solution);
    setHistory([]);
    setGameStats({
      moves: 0,
      hintsUsed: 0,
      startTime: Date.now(),
      endTime: void 0,
      baseTime: void 0,
      penaltyTime: void 0,
      totalTime: void 0,
      scoreSubmitted: false
    });
  }, [dailyPuzzleData]);
  const makeMove = reactExports.useCallback((row, col) => {
    var _a, _b;
    if (((_b = (_a = gameState.grid[row]) == null ? void 0 : _a[col]) == null ? void 0 : _b.isFixed) || gameState.isComplete) return;
    setHistory((prev) => [...prev, {
      grid: gameState.grid.map((row2) => row2.map((cell) => ({ ...cell }))),
      moves: gameStats.moves
    }]);
    setGameState((prev) => {
      const newGrid = prev.grid.map(
        (gridRow, r) => gridRow.map((cell, c) => {
          if (r === row && c === col) {
            return { ...cell, value: getNextValue(cell.value) };
          }
          return cell;
        })
      );
      const { violations, messages } = validateGrid(newGrid, prev.constraints);
      const complete = isGameCompleteAndValid(newGrid, prev.constraints);
      return {
        ...prev,
        grid: newGrid,
        violations,
        violationMessages: messages,
        isComplete: complete
      };
    });
    setGameStats((prev) => ({ ...prev, moves: prev.moves + 1 }));
  }, [gameState.grid, gameState.constraints, gameState.isComplete, gameStats.moves]);
  const useHint = reactExports.useCallback(() => {
    if (gameState.isComplete) return;
    const hint = getHint(gameState.grid);
    if (!hint) return;
    const [hintRow, hintCol] = hint;
    const hintValue = solution[hintRow][hintCol];
    setHistory((prev) => [...prev, {
      grid: gameState.grid.map((row) => row.map((cell) => ({ ...cell }))),
      moves: gameStats.moves
    }]);
    setGameState((prev) => {
      const newGrid = prev.grid.map(
        (row, r) => row.map((cell, c) => {
          if (r === hintRow && c === hintCol) {
            return { ...cell, value: hintValue };
          }
          return cell;
        })
      );
      const { violations, messages } = validateGrid(newGrid, prev.constraints);
      const complete = isGameCompleteAndValid(newGrid, prev.constraints);
      return {
        ...prev,
        grid: newGrid,
        violations,
        violationMessages: messages,
        isComplete: complete
      };
    });
    setGameStats((prev) => ({ ...prev, hintsUsed: prev.hintsUsed + 1 }));
  }, [gameState.grid, gameState.isComplete, solution, gameStats.moves]);
  const undoMove = reactExports.useCallback(() => {
    if (history.length === 0) return;
    const lastState = history[history.length - 1];
    setHistory((prev) => prev.slice(0, -1));
    const { violations, messages } = validateGrid(lastState.grid, gameState.constraints);
    const complete = isGameCompleteAndValid(lastState.grid, gameState.constraints);
    setGameState((prev) => ({
      ...prev,
      grid: lastState.grid,
      violations,
      violationMessages: messages,
      isComplete: complete
    }));
    setGameStats((prev) => ({ ...prev, moves: lastState.moves }));
  }, [history, gameState.constraints]);
  reactExports.useEffect(() => {
    if (gameState.isComplete && gameStats.endTime === void 0) {
      setShowWinAnimation(true);
      const endTime = Date.now();
      const baseTime = endTime - gameStats.startTime;
      const penaltyTime = gameStats.hintsUsed * HINT_PENALTY_SECONDS * 1e3;
      const totalTime = baseTime + penaltyTime;
      setGameStats((prev) => ({
        ...prev,
        endTime,
        baseTime,
        penaltyTime,
        totalTime
      }));
      setTimeout(() => {
        setShowWinAnimation(false);
      }, 1200);
    }
  }, [gameState.isComplete, gameStats.startTime, gameStats.hintsUsed, gameStats.endTime]);
  const resetGame = reactExports.useCallback(() => {
    setShowWinAnimation(false);
    initializeGame();
  }, [initializeGame]);
  reactExports.useEffect(() => {
    if (dailyPuzzleData) {
      setShowWinAnimation(false);
      initializeGame();
      setHistory([]);
    }
  }, [dailyPuzzleData, initializeGame]);
  const canUndo = history.length > 0;
  return {
    gameState,
    gameStats,
    violations: gameState.violations,
    violationMessages: gameState.violationMessages,
    isComplete: gameState.isComplete,
    showWinAnimation,
    canUndo,
    makeMove,
    undoMove,
    useHint,
    resetGame,
    initializeGame
  };
};
const useLeaderboard = () => {
  const [currentLeaderboard, setCurrentLeaderboard] = reactExports.useState([]);
  const [currentDate, setCurrentDate] = reactExports.useState("");
  const [loading, setLoading] = reactExports.useState(false);
  const [error, setError] = reactExports.useState(null);
  const calculateScore = (moves, totalTime, hintsUsed) => {
    return -totalTime;
  };
  const fetchLeaderboardForDate = reactExports.useCallback(async (date) => {
    if (!date || typeof date !== "string" || date.trim() === "") {
      setError("Invalid puzzle date");
      setLoading(false);
      return;
    }
    setLoading(true);
    try {
      setError(null);
      const allEntriesQuery = query(
        collection(nhlDb, "nhl-duo"),
        where("puzzleDate", "==", date)
      );
      const allEntriesSnapshot = await getDocs(allEntriesQuery);
      const entries = [];
      allEntriesSnapshot.forEach((doc) => {
        var _a;
        try {
          const data = doc.data();
          const entry = {
            id: doc.id,
            ...data,
            completedAt: ((_a = data.completedAt) == null ? void 0 : _a.toDate()) || /* @__PURE__ */ new Date()
          };
          entries.push(entry);
        } catch (docError) {
        }
      });
      entries.sort((a, b) => a.totalTime - b.totalTime);
      const top20 = entries.slice(0, 20);
      setCurrentLeaderboard(top20);
      setCurrentDate(date);
    } catch (error2) {
      if (error2.code !== "unavailable" && error2.code !== "permission-denied") {
        setError("Failed to load leaderboard");
      }
      setCurrentLeaderboard([]);
    } finally {
      setLoading(false);
    }
  }, []);
  const submitScore = async (userId, displayName, gameStats, puzzleDate) => {
    try {
      setError(null);
      const existingScoreQuery = query(
        collection(nhlDb, "nhl-duo"),
        where("userId", "==", userId),
        where("puzzleDate", "==", puzzleDate),
        limit(1)
      );
      const existingScoreSnapshot = await getDocs(existingScoreQuery);
      if (!existingScoreSnapshot.empty) {
        return;
      }
      const leaderboardEntry = {
        userId,
        displayName,
        puzzleDate,
        moves: gameStats.moves,
        hintsUsed: gameStats.hintsUsed,
        totalTime: gameStats.totalTime,
        score: calculateScore(gameStats.moves, gameStats.totalTime, gameStats.hintsUsed),
        completedAt: Timestamp.now()
      };
      const docRef = await addDoc(collection(nhlDb, "nhl-duo"), leaderboardEntry);
    } catch (error2) {
      if (error2.code === "permission-denied") {
        setError("Please sign in to submit your score to the leaderboard");
      } else if (error2.code === "unavailable") ;
      else {
        setError("Failed to submit score. Please try again.");
      }
    }
  };
  const getUserRank = async (userId, puzzleDate) => {
    try {
      const allEntriesQuery = query(
        collection(nhlDb, "nhl-duo"),
        where("puzzleDate", "==", puzzleDate)
      );
      const querySnapshot = await getDocs(allEntriesQuery);
      const allEntries = [];
      querySnapshot.forEach((doc) => {
        var _a;
        try {
          const data = doc.data();
          const entry = {
            id: doc.id,
            ...data,
            completedAt: ((_a = data.completedAt) == null ? void 0 : _a.toDate()) || /* @__PURE__ */ new Date()
          };
          allEntries.push(entry);
        } catch (docError) {
        }
      });
      allEntries.sort((a, b) => a.totalTime - b.totalTime);
      const userEntryIndex = allEntries.findIndex((entry) => entry.userId === userId);
      if (userEntryIndex === -1) return null;
      return {
        rank: userEntryIndex + 1,
        userEntry: allEntries[userEntryIndex]
      };
    } catch (error2) {
      return null;
    }
  };
  const getUserCompletedDates = async (userId) => {
    try {
      const userEntriesQuery = query(
        collection(nhlDb, "nhl-duo"),
        where("userId", "==", userId)
      );
      const querySnapshot = await getDocs(userEntriesQuery);
      const completedDates = [];
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        if (data.puzzleDate) {
          completedDates.push(data.puzzleDate);
        }
      });
      return [...new Set(completedDates)];
    } catch (error2) {
      return [];
    }
  };
  const getUserStats = reactExports.useCallback(async (userId) => {
    try {
      const userEntriesQuery = query(
        collection(nhlDb, "nhl-duo"),
        where("userId", "==", userId)
      );
      const querySnapshot = await getDocs(userEntriesQuery);
      const userEntries = [];
      querySnapshot.forEach((doc) => {
        var _a;
        try {
          const data = doc.data();
          const entry = {
            id: doc.id,
            ...data,
            completedAt: ((_a = data.completedAt) == null ? void 0 : _a.toDate()) || /* @__PURE__ */ new Date()
          };
          userEntries.push(entry);
        } catch (docError) {
        }
      });
      if (userEntries.length === 0) {
        return null;
      }
      const totalGames = userEntries.length;
      const totalMoves = userEntries.reduce((sum, entry) => sum + entry.moves, 0);
      const totalHints = userEntries.reduce((sum, entry) => sum + entry.hintsUsed, 0);
      const totalTimeSpent = userEntries.reduce((sum, entry) => {
        const baseTime = entry.totalTime - entry.hintsUsed * 15 * 1e3;
        return sum + baseTime;
      }, 0);
      const totalTimeWithPenalties = userEntries.reduce((sum, entry) => sum + entry.totalTime, 0);
      const averageTime = totalTimeWithPenalties / totalGames;
      const unassistedGames = userEntries.filter((entry) => entry.hintsUsed === 0);
      const unassistedGamesCount = unassistedGames.length;
      const bestUnassistedTime = unassistedGames.length > 0 ? Math.min(...unassistedGames.map((entry) => entry.totalTime)) : null;
      const bestTime = Math.min(...userEntries.map((entry) => entry.totalTime));
      const averageMoves = totalMoves / totalGames;
      const averageHints = totalHints / totalGames;
      const bestUnassistedTimeEntry = unassistedGames.find((entry) => entry.totalTime === bestUnassistedTime);
      const bestTimeEntry = userEntries.find((entry) => entry.totalTime === bestTime);
      const oneWeekAgo = /* @__PURE__ */ new Date();
      oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
      const gamesThisWeek = userEntries.filter(
        (entry) => entry.completedAt >= oneWeekAgo
      ).length;
      let currentStreak = 0;
      const todayStr = (/* @__PURE__ */ new Date()).toLocaleDateString("en-CA");
      let checkDateStr = todayStr;
      while (true) {
        const validEntryForThisDate = userEntries.find((entry) => {
          const completionDateStr = entry.completedAt.toLocaleDateString("en-CA");
          const puzzleDateMatches = entry.puzzleDate === checkDateStr;
          const completionDateMatches = completionDateStr === checkDateStr;
          return puzzleDateMatches && completionDateMatches;
        });
        if (validEntryForThisDate) {
          currentStreak++;
        } else {
          if (checkDateStr === todayStr) {
          } else {
            break;
          }
        }
        const currentDate2 = new Date(checkDateStr);
        currentDate2.setDate(currentDate2.getDate() - 1);
        checkDateStr = currentDate2.toLocaleDateString("en-CA");
        const daysDiff = Math.floor((Date.now() - currentDate2.getTime()) / (1e3 * 60 * 60 * 24));
        if (daysDiff > 365) {
          break;
        }
      }
      let bestRank = Infinity;
      let bestRankDate;
      if (userEntries.length > 0) {
        bestRank = 1;
        bestRankDate = userEntries[0].puzzleDate;
      }
      const completedDates = userEntries.map((entry) => entry.puzzleDate);
      const stats = {
        totalGames,
        totalMoves,
        totalHints,
        totalTimeSpent,
        unassistedGamesCount,
        bestUnassistedTime,
        bestTime,
        bestRank,
        averageMoves,
        averageHints,
        averageTime,
        gamesThisWeek,
        currentStreak,
        bestUnassistedTimeDate: bestUnassistedTimeEntry == null ? void 0 : bestUnassistedTimeEntry.puzzleDate,
        bestTimeDate: bestTimeEntry == null ? void 0 : bestTimeEntry.puzzleDate,
        bestRankDate,
        completedDates
      };
      return stats;
    } catch (error2) {
      return null;
    }
  }, []);
  return {
    currentLeaderboard,
    currentPuzzleDate: currentDate,
    loading,
    error,
    submitScore,
    fetchLeaderboardForDate,
    getUserRank,
    getUserCompletedDates,
    calculateScore,
    getUserStats
  };
};
const SHEET_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQXrwTxkBTG8ymHlqL4BH2ivHdMt6GqQA4RIOa0osYW6zK93AUnPRKT9GKKKOvCybIXfwhsPR2pY7nz/pub?gid=580450764&single=true&output=csv";
const fetchDailyPuzzle = async () => {
  try {
    const response = await fetch(SHEET_URL);
    const csvText = await response.text();
    const lines = csvText.split("\n");
    const headers = lines[0].split(",");
    const today = (/* @__PURE__ */ new Date()).toLocaleDateString("en-CA");
    for (let i = 1; i < lines.length; i++) {
      const line = lines[i].trim();
      if (!line) continue;
      const values = parseCSVLine(line);
      const csvDate = values[0].trim();
      if (csvDate === today) {
        try {
          let preFilledCells, constraints, solution;
          try {
            const preFilledCellsJson = values[2].replace(/'/g, '"');
            preFilledCells = JSON.parse(preFilledCellsJson);
          } catch (error) {
          }
          try {
            const constraintsJson = values[3].replace(/'/g, '"');
            constraints = JSON.parse(constraintsJson);
          } catch (error) {
            throw new Error(`Invalid constraints JSON: ${error.message}`);
          }
          try {
            const solutionJson = values[4].replace(/'/g, '"');
            solution = JSON.parse(solutionJson);
          } catch (error) {
            throw new Error(`Invalid solution JSON: ${error.message}`);
          }
          let hasValidationErrors = false;
          preFilledCells.forEach((cell) => {
            const solutionValue = solution[cell.row][cell.col];
            if (cell.value !== solutionValue) {
              hasValidationErrors = true;
            }
          });
          if (hasValidationErrors) {
            return null;
          }
          const size = parseInt(values[1]);
          if (isNaN(size) || size <= 0 || size > 20) {
            return null;
          }
          return {
            date: values[0],
            size,
            preFilledCells,
            constraints,
            solution,
            difficulty: values[5] || "Easy"
          };
        } catch (parseError) {
          return null;
        }
      }
    }
    return null;
  } catch (error) {
    return null;
  }
};
const fetchAllAvailablePuzzles = async () => {
  try {
    const response = await fetch(SHEET_URL);
    const csvText = await response.text();
    const lines = csvText.split("\n");
    const puzzles = [];
    for (let i = 1; i < lines.length; i++) {
      const line = lines[i].trim();
      if (!line) continue;
      try {
        const values = parseCSVLine(line);
        const date = values[0].trim();
        const difficulty = values[5] || "Easy";
        if (date) {
          puzzles.push({ date, difficulty });
        }
      } catch (error) {
        continue;
      }
    }
    puzzles.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    const today = (/* @__PURE__ */ new Date()).toLocaleDateString("en-CA");
    const filteredPuzzles = puzzles.filter((puzzle) => puzzle.date < today);
    return filteredPuzzles;
  } catch (error) {
    return [];
  }
};
const fetchPuzzleByDate = async (targetDate) => {
  try {
    const response = await fetch(SHEET_URL);
    const csvText = await response.text();
    const lines = csvText.split("\n");
    for (let i = 1; i < lines.length; i++) {
      const line = lines[i].trim();
      if (!line) continue;
      const values = parseCSVLine(line);
      const csvDate = values[0].trim();
      if (csvDate === targetDate) {
        try {
          const preFilledCellsJson = values[2].replace(/'/g, '"');
          const preFilledCells = JSON.parse(preFilledCellsJson);
          const constraintsJson = values[3].replace(/'/g, '"');
          const constraints = JSON.parse(constraintsJson);
          const solutionJson = values[4].replace(/'/g, '"');
          const solution = JSON.parse(solutionJson);
          let hasValidationErrors = false;
          preFilledCells.forEach((cell) => {
            const solutionValue = solution[cell.row][cell.col];
            if (cell.value !== solutionValue) {
              hasValidationErrors = true;
            }
          });
          if (hasValidationErrors) {
            return null;
          }
          const size = parseInt(values[1]);
          if (isNaN(size) || size <= 0 || size > 20) {
            return null;
          }
          return {
            date: values[0],
            size,
            preFilledCells,
            constraints,
            solution,
            difficulty: values[5] || "Easy"
          };
        } catch (parseError) {
          return null;
        }
      }
    }
    return null;
  } catch (error) {
    return null;
  }
};
const parseCSVLine = (line) => {
  const result = [];
  let current = "";
  let inQuotes = false;
  for (let i = 0; i < line.length; i++) {
    const char = line[i];
    if (char === '"') {
      if (inQuotes && line[i + 1] === '"') {
        current += '"';
        i++;
      } else {
        inQuotes = !inQuotes;
      }
    } else if (char === "," && !inQuotes) {
      result.push(current);
      current = "";
    } else {
      current += char;
    }
  }
  result.push(current);
  return result;
};
const PFSNHeader = ({
  currentPage = "NFL",
  logoUrl = "https://statico.profootballnetwork.com/wp-content/uploads/2025/06/12093424/tools-navigation-06-12-25.jpg",
  logoAlt = "PFSN Logo"
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = reactExports.useState(false);
  React.useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);
  const navItems = [
    { label: "CBB", href: "https://www.profootballnetwork.com/mens-cbb/" },
    { label: "CFB", href: "https://www.profootballnetwork.com/cfb/" },
    { label: "Fantasy", href: "https://www.profootballnetwork.com/fantasy-football/" },
    { label: "MLB", href: "https://www.profootballnetwork.com/mlb/" },
    { label: "NASCAR", href: "https://www.profootballnetwork.com/nascar/" },
    { label: "NBA", href: "https://www.profootballnetwork.com/nba/" },
    { label: "NFL", href: "https://www.profootballnetwork.com/nfl/" },
    { label: "NHL", href: "https://www.profootballnetwork.com/nhl/" },
    { label: "Tennis", href: "https://www.profootballnetwork.com/tennis/" },
    { label: "WNBA", href: "https://www.profootballnetwork.com/wnba/" },
    { label: "WWE", href: "https://www.profootballnetwork.com/wwe-player-guessing-game/" }
  ];
  const handleMenuToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  const handleMenuClose = () => {
    setMobileMenuOpen(false);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pfsn-header-wrap", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pfsn-header-container", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          className: "mobile-menu-toggle",
          onClick: handleMenuToggle,
          "aria-label": "Toggle menu",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hamburger-line" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hamburger-line" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hamburger-line" })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pfsn-logo-section", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://www.profootballnetwork.com", target: "_blank", rel: "noopener noreferrer", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: logoUrl,
            alt: logoAlt,
            className: "pfsn-logo",
            width: "300",
            height: "124"
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mobile-game-title md:hidden", children: "NHL Duo" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pfsn-tagline" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: `pfsn-main-nav ${mobileMenuOpen ? "mobile-open" : ""}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "nav-menu", children: navItems.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: currentPage === item.label ? "current-page" : "", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: item.href,
          target: "_blank",
          rel: "noopener noreferrer",
          onClick: handleMenuClose,
          children: item.label
        }
      ) }, item.label)) }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `mobile-menu-overlay ${mobileMenuOpen ? "active" : ""}`, onClick: handleMenuClose })
  ] });
};
const EditProfileModal = ({ user, onClose }) => {
  const [displayName, setDisplayName] = reactExports.useState(user.displayName || "");
  const [loading, setLoading] = reactExports.useState(false);
  const [error, setError] = reactExports.useState("");
  const [success, setSuccess] = reactExports.useState(false);
  React.useEffect(() => {
    trackModalOpen("edit_profile");
    trackProfileEdit();
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!displayName.trim()) {
      setError("Display name cannot be empty");
      return;
    }
    setLoading(true);
    setError("");
    try {
      await updateProfile(user, { displayName: displayName.trim() });
      trackProfileUpdate(true);
      setSuccess(true);
      setTimeout(() => {
        onClose();
      }, 1500);
    } catch (error2) {
      trackProfileUpdate(false);
      setError("Failed to update display name. Please try again.");
    } finally {
      setLoading(false);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-lg p-6 max-w-md w-full mx-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center mb-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold text-gray-800", children: "Edit Profile" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: onClose,
          className: "text-gray-500 hover:text-gray-700",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 24 })
        }
      )
    ] }),
    success ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Save, { className: "w-8 h-8 text-green-600" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold text-gray-800 mb-2", children: "Profile Updated!" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600", children: "Your display name has been successfully updated." })
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit, className: "space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium text-gray-700 mb-1", children: "Display Name" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: "absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400", size: 20 }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "text",
              value: displayName,
              onChange: (e) => {
                setDisplayName(e.target.value);
                setError("");
              },
              className: "w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm",
              placeholder: "Your display name",
              maxLength: 50
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-xs text-gray-500", children: "This name will be shown on the leaderboard" })
      ] }),
      error && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-red-700 text-sm bg-red-50 border border-red-200 p-3 rounded-lg", children: error }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: onClose,
            className: "flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium",
            children: "Cancel"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "submit",
            disabled: loading || !displayName.trim(),
            className: "flex-1 bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-sm font-medium flex items-center justify-center gap-2",
            children: loading ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "animate-spin rounded-full h-4 w-4 border-b-2 border-white" }),
              "Saving..."
            ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Save, { className: "w-4 h-4" }),
              "Save"
            ] })
          }
        )
      ] })
    ] })
  ] }) });
};
const TopBar = ({
  user,
  activeTab,
  onTabChange,
  onShowLogin,
  onLogout
}) => {
  var _a, _b;
  const [showUserMenu, setShowUserMenu] = reactExports.useState(false);
  const [showEditProfile, setShowEditProfile] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-red-600 text-white shadow-lg", style: { backgroundColor: "#cc3333" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4 py-1 md:py-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden md:block", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl font-bold text-white", children: "NHL Duo" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center md:flex-initial absolute left-1/2 -translate-x-1/2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex bg-white bg-opacity-20 rounded-lg p-0.5 text-xs md:p-0.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: () => onTabChange("game"),
            className: `px-2 md:px-4 py-1 md:py-2 rounded-md font-medium transition-colors text-xs md:text-sm ${activeTab === "game" ? "bg-white text-red-600 shadow-sm" : "text-white hover:bg-white hover:bg-opacity-20"}`,
            children: "Game"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-px bg-white bg-opacity-30 mx-1" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: () => {
              onTabChange("leaderboard");
              window.scrollTo({ top: 0, behavior: "smooth" });
            },
            className: `px-2 md:px-4 py-1 md:py-2 rounded-md font-medium transition-colors text-xs md:text-sm ${activeTab === "leaderboard" ? "bg-white text-red-600 shadow-sm" : "text-white hover:bg-white hover:bg-opacity-20"}`,
            children: "Leaderboard"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-px bg-white bg-opacity-30 mx-1" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: () => {
              onTabChange("dashboard");
              window.scrollTo({ top: 0, behavior: "smooth" });
            },
            className: `px-2 md:px-4 py-1 md:py-2 rounded-md font-medium transition-colors text-xs md:text-sm ${activeTab === "dashboard" ? "bg-white text-red-600 shadow-sm" : "text-white hover:bg-white hover:bg-opacity-20"}`,
            children: "Dashboard"
          }
        )
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-end ml-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            onClick: () => setShowUserMenu(!showUserMenu),
            className: "flex items-center justify-center hover:bg-white hover:bg-opacity-10 p-2 rounded-lg transition-colors md:gap-2",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-7 h-7 bg-transparent border-2 border-white rounded-full flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: "w-4 h-4 text-white" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden md:inline text-white text-sm", children: user ? user.displayName || ((_a = user.email) == null ? void 0 : _a.split("@")[0]) || "User" : "Guest" })
            ]
          }
        ),
        showUserMenu && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute right-0 top-full mt-2 bg-white rounded-lg shadow-lg border border-gray-200 py-2 min-w-[120px] z-50", children: user ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 py-2 border-b border-gray-100", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-medium text-gray-800", children: user.displayName || ((_b = user.email) == null ? void 0 : _b.split("@")[0]) || "User" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-gray-500", children: user.email })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              onClick: () => {
                setShowEditProfile(true);
                setShowUserMenu(false);
              },
              className: "w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100 flex items-center gap-2 text-sm",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(SquarePen, { className: "w-4 h-4" }),
                "Edit"
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              onClick: () => {
                onLogout();
                setShowUserMenu(false);
              },
              className: "w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100 flex items-center gap-2 text-sm",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(LogOut, { className: "w-4 h-4" }),
                "Logout"
              ]
            }
          )
        ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            onClick: () => {
              onShowLogin();
              setShowUserMenu(false);
            },
            className: "w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100 flex items-center gap-2 text-sm",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(LogIn, { className: "w-4 h-4" }),
              "Login"
            ]
          }
        ) })
      ] }) })
    ] }) }) }),
    showUserMenu && user && /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "fixed inset-0 z-40",
        onClick: () => setShowUserMenu(false)
      }
    ),
    showEditProfile && /* @__PURE__ */ jsxRuntimeExports.jsx(
      EditProfileModal,
      {
        user,
        onClose: () => setShowEditProfile(false)
      }
    )
  ] });
};
const GameGrid = ({
  grid,
  constraints,
  violations,
  onCellClick,
  showWinAnimation = false
}) => {
  const size = grid.length;
  const getCellKey = (row, col) => `${row},${col}`;
  const isViolated = (row, col) => {
    return violations.has(getCellKey(row, col));
  };
  const renderCellContent = (cell) => {
    if (cell.value === "goal") {
      return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl sm:text-3xl", children: "🥅" });
    } else if (cell.value === "stick") {
      return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl sm:text-3xl", children: "🏒" });
    }
    return null;
  };
  const getConstraintSymbol = (row, col, direction) => {
    const constraint = constraints.find((c) => {
      const [r1, c1] = c.cell1;
      const [r2, c2] = c.cell2;
      if (direction === "right") {
        return r1 === row && c1 === col && r2 === row && c2 === col + 1 || r1 === row && c1 === col + 1 && r2 === row && c2 === col;
      } else {
        return r1 === row && c1 === col && r2 === row + 1 && c2 === col || r1 === row + 1 && c1 === col && r2 === row && c2 === col;
      }
    });
    if (!constraint) return null;
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `absolute z-10 ${direction === "right" ? "-right-3 top-1/2 transform -translate-y-1/2" : "-bottom-3 left-1/2 transform -translate-x-1/2"} w-6 h-6 flex items-center justify-center text-sm font-bold bg-white rounded-full border-2 border-gray-200 shadow-sm ${constraint.type === "equal" ? "text-green-600" : "text-red-600"}`, children: constraint.type === "equal" ? "=" : "×" });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: "grid gap-1 w-full max-w-lg mx-auto",
      style: {
        gridTemplateColumns: `repeat(${size}, 1fr)`
      },
      children: grid.map(
        (row, rowIndex) => row.map((cell, colIndex) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: () => onCellClick(rowIndex, colIndex),
              disabled: cell.isFixed,
              className: `
                  w-full aspect-square border-2 rounded-lg flex items-center justify-center
                  min-w-0 min-h-0
                  transition-all duration-200 transform hover:scale-105
                  ${showWinAnimation ? "animate-flip" : ""}
                  ${cell.isFixed ? "bg-gray-200 border-gray-300 cursor-not-allowed" : "bg-white border-gray-300 hover:border-gray-400 cursor-pointer hover:shadow-md"}
                  ${isViolated(rowIndex, colIndex) ? "border-red-500 bg-red-50" : ""}
                `,
              style: {
                animationDelay: showWinAnimation ? `${Math.floor(rowIndex / 2) * 300}ms` : "0ms"
              },
              children: renderCellContent(cell)
            }
          ),
          colIndex < size - 1 && getConstraintSymbol(rowIndex, colIndex, "right"),
          rowIndex < size - 1 && getConstraintSymbol(rowIndex, colIndex, "bottom")
        ] }, getCellKey(rowIndex, colIndex)))
      )
    }
  ) });
};
const GameControls = ({
  onUndo,
  onHint,
  onNewGame,
  canUndo,
  isGameComplete,
  difficulty,
  onDifficultyChange
}) => {
  React.useEffect(() => {
    console.log("🎮 GAME CONTROLS - canUndo prop updated:", canUndo);
  }, [canUndo]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col gap-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 justify-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        onClick: onUndo,
        disabled: !canUndo || isGameComplete,
        className: `
            flex items-center gap-2 px-2 py-1.5 rounded-lg font-medium transition-all text-sm
            ${!canUndo || isGameComplete ? "bg-gray-300 text-gray-500 cursor-not-allowed" : "bg-blue-500 text-white hover:bg-blue-600"}
          `,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Undo, { className: "w-4 h-4" }),
          "Undo"
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        onClick: onHint,
        disabled: isGameComplete,
        className: `
            flex items-center gap-2 px-2 py-1.5 rounded-lg font-medium transition-all text-sm
            ${!isGameComplete ? "bg-yellow-500 text-white hover:bg-yellow-600" : "bg-gray-300 text-gray-500 cursor-not-allowed"}
          `,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Lightbulb, { className: "w-4 h-4" }),
          "Fill Next"
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        onClick: onNewGame,
        className: "flex items-center gap-2 px-2 py-1.5 bg-green-500 text-white rounded-lg font-medium hover:bg-green-600 transition-all text-sm",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(RotateCcw, { className: "w-4 h-4" }),
          "Reset"
        ]
      }
    )
  ] }) });
};
const GameStatus = ({
  violations,
  violationMessages,
  isComplete,
  gameStats,
  showWinAnimation = false,
  onDismissWin
}) => {
  if (isComplete) return null;
  if (violations.size > 0) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-4 bg-red-100 border border-red-300 rounded-lg", children: violationMessages.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "text-sm text-red-700 space-y-1", children: violationMessages.map((message, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(AlertCircle, { className: "w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: message })
    ] }, index)) }) });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center gap-2 p-4 bg-blue-100 border border-blue-300 rounded-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-blue-800 font-semibold", children: "Keep going! Fill the grid following the rules." }) });
};
const ArchivePopup = ({ onClose, onSelectDate, availablePuzzles, userId }) => {
  const [isLoading, setIsLoading] = reactExports.useState(true);
  const [completedDates, setCompletedDates] = reactExports.useState([]);
  const { getUserCompletedDates } = useLeaderboard();
  React.useEffect(() => {
    trackModalOpen("archive");
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);
  reactExports.useEffect(() => {
    trackArchiveView();
    setIsLoading(false);
  }, []);
  reactExports.useEffect(() => {
    const fetchCompletedDates = async () => {
      if (userId && getUserCompletedDates) {
        try {
          const dates = await getUserCompletedDates(userId);
          setCompletedDates(dates);
        } catch (error) {
          console.error("Error fetching completed dates:", error);
        }
      }
    };
    fetchCompletedDates();
  }, [userId, getUserCompletedDates]);
  const formatDate = (dateString) => {
    try {
      const date = new Date(dateString);
      return {
        day: date.toLocaleDateString("en-US", { weekday: "short" }),
        date: date.toLocaleDateString("en-US", { month: "short", day: "numeric" })
      };
    } catch (error) {
      return { day: "Invalid", date: "Date" };
    }
  };
  const handleDateSelect = (date) => {
    trackArchivePuzzleLoad(date, true);
    onSelectDate(date);
    onClose();
  };
  const isDateCompleted = (date) => completedDates.includes(date);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-2xl shadow-2xl max-w-md w-full mx-4 max-h-[80vh] overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-r from-gray-800 to-black p-6 text-center relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: onClose,
          className: "absolute top-4 right-4 text-white hover:text-gray-200 transition-colors",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-6 h-6" })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-center gap-3 mb-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "w-6 h-6 text-white" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold text-white", children: "Archive Games" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-100", children: "Select a previous day to play" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-6 max-h-96 overflow-y-auto", children: isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600", children: "Loading available puzzles..." })
    ] }) : availablePuzzles.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center py-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600", children: "No archive puzzles available" }) }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-3 gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          onClick: () => handleDateSelect((/* @__PURE__ */ new Date()).toLocaleDateString("en-CA")),
          className: "relative p-3 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors text-center border-2 border-blue-300 hover:border-blue-400",
          children: [
            isDateCompleted((/* @__PURE__ */ new Date()).toLocaleDateString("en-CA")) && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-1 right-1 w-4 h-4 bg-green-500 rounded-full flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "w-2.5 h-2.5 text-white" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-medium text-blue-800 mb-1", children: "Today" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold text-blue-900 mb-2", children: (() => {
              const today = /* @__PURE__ */ new Date();
              const { date } = formatDate(today.toLocaleDateString("en-CA"));
              return date;
            })() })
          ]
        }
      ),
      availablePuzzles.map((puzzle) => {
        const { day, date } = formatDate(puzzle.date);
        const isCompleted = isDateCompleted(puzzle.date);
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            onClick: () => handleDateSelect(puzzle.date),
            className: "relative p-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors text-center border border-gray-200 hover:border-gray-300",
            children: [
              isCompleted && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-1 right-1 w-4 h-4 bg-green-500 rounded-full flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "w-2.5 h-2.5 text-white" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-medium text-gray-800 mb-1", children: day }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold text-gray-900 mb-2", children: date })
            ]
          },
          puzzle.date
        );
      })
    ] }) })
  ] }) });
};
const RulesModal = ({ isOpen, onClose }) => {
  React.useEffect(() => {
    if (isOpen) {
      trackModalOpen("rules");
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);
  if (!isOpen) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-2xl shadow-2xl max-w-2xl w-full mx-4 max-h-[80vh] overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-r from-gray-800 to-black p-6 text-center relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: onClose,
          className: "absolute top-4 right-4 text-white hover:text-gray-200 transition-colors",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-6 h-6" })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-center gap-3 mb-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl", children: "🏒" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold text-white", children: "NHL Duo Rules" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-100", children: "How to play NHL Duo" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 max-h-96 overflow-y-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("ol", { className: "space-y-4 text-gray-700", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-lg", children: "1." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Each row and column must have equal numbers of 🥅 and 🏒" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-lg", children: "2." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "No more than 2 consecutive 🥅 or 🏒 (vertically or horizontally)" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-lg", children: "3." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-6 h-6 flex items-center justify-center text-sm font-bold bg-white rounded-full border-2 border-gray-200 shadow-sm text-green-600", children: "=" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "means cells must be the same" })
          ] }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-lg", children: "4." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-6 h-6 flex items-center justify-center text-sm font-bold bg-white rounded-full border-2 border-gray-200 shadow-sm text-red-600", children: "×" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "means cells must be different" })
          ] }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 p-4 bg-blue-50 rounded-lg", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-gray-800 mb-2", children: "Tips:" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "text-sm text-gray-600 space-y-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Click a cell to cycle through values:" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "ml-4", children: "1st click → 🥅" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "ml-4", children: "2nd click → 🏒" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "ml-4", children: "3rd click → Empty" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Use hints if you get stuck (adds 15 sec to your time)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Try to solve without hints for the best score!" })
        ] })
      ] })
    ] })
  ] }) });
};
const GameTab = ({
  dailyPuzzleData,
  gameState,
  gameStats,
  violations,
  violationMessages,
  isComplete,
  showWinAnimation,
  canUndo,
  onCellClick,
  onHint,
  onReset,
  undoMove,
  onPlayArchive,
  availablePuzzles,
  isLoggedIn,
  userId,
  currentPuzzleDate,
  onShowLogin,
  showBottomResults,
  onCloseBottomResults
}) => {
  const [showArchive, setShowArchive] = reactExports.useState(false);
  const [showRules, setShowRules] = reactExports.useState(false);
  if (!isLoggedIn) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-1 sm:px-4 py-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-6 max-w-md lg:max-w-sm mx-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6 max-w-lg lg:max-w-md mx-auto", children: [
        dailyPuzzleData && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-xl shadow-lg p-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold text-gray-800", children: currentPuzzleDate === (/* @__PURE__ */ new Date()).toLocaleDateString("en-CA") ? "Today's Puzzle" : `Archive: ${new Date(currentPuzzleDate).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric"
              })}` }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600", children: "Fill the grid with 🥅 and 🏒" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                onClick: () => {
                  trackRuleView();
                  setShowRules(true);
                },
                className: "flex items-center gap-1 px-3 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors text-sm font-medium shadow-sm",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(HelpCircle, { className: "w-4 h-4" }),
                  "Rules"
                ]
              }
            )
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            GameGrid,
            {
              grid: gameState.grid,
              constraints: gameState.constraints,
              violations,
              onCellClick,
              showWinAnimation
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            GameControls,
            {
              onUndo: undoMove,
              onHint,
              onNewGame: onReset,
              canUndo,
              isGameComplete: isComplete
            }
          ) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          GameStatus,
          {
            violations,
            violationMessages,
            isComplete,
            gameStats
          }
        ),
        showBottomResults && gameStats && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-xl shadow-lg p-6", "data-bottom-results": true, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold text-gray-800 mb-2", children: "🎉 Puzzle Completed!" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600", children: "Great job solving the challenge!" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3 mb-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center p-3 bg-blue-50 rounded-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-gray-700", children: "Moves" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl font-bold text-blue-600", children: gameStats.moves })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center p-3 bg-yellow-50 rounded-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-gray-700", children: "Hints Used" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl font-bold text-yellow-600", children: gameStats.hintsUsed })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center p-3 bg-green-50 rounded-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-left", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-gray-700", children: "Time" }),
                gameStats.hintsUsed > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-gray-400 mt-1", children: "+15s per hint" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-right", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-bold text-green-600", children: gameStats.totalTime ? (() => {
                  const seconds = Math.floor(gameStats.totalTime / 1e3);
                  const minutes = Math.floor(seconds / 60);
                  const remainingSeconds = seconds % 60;
                  return minutes > 0 ? `${minutes}m ${remainingSeconds}s` : `${remainingSeconds}s`;
                })() : "0s" }),
                gameStats.hintsUsed > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-gray-500 mt-1", children: (() => {
                  const baseTime = gameStats.totalTime - gameStats.hintsUsed * 15 * 1e3;
                  const seconds = Math.floor(baseTime / 1e3);
                  const minutes = Math.floor(seconds / 60);
                  const remainingSeconds = seconds % 60;
                  const baseTimeFormatted = minutes > 0 ? `${minutes}m ${remainingSeconds}s` : `${remainingSeconds}s`;
                  return `${baseTimeFormatted} + ${gameStats.hintsUsed}×15s`;
                })() })
              ] })
            ] }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-3 justify-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                onClick: async () => {
                  trackCTAClick("share", "game_bottom_results_guest", false);
                  const timeTaken = gameStats.totalTime ? (() => {
                    const seconds = Math.floor(gameStats.totalTime / 1e3);
                    const minutes = Math.floor(seconds / 60);
                    const remainingSeconds = seconds % 60;
                    return minutes > 0 ? `${minutes}m ${remainingSeconds}s` : `${remainingSeconds}s`;
                  })() : "0s";
                  const shareText = `🏀 Just solved today's NBA Duo in ${timeTaken}! 🏀

⚡ ${gameStats.moves} moves
💡 ${gameStats.hintsUsed} hints used

Can you beat my time? Play now:`;
                  const gameUrl = window.location.href;
                  if (navigator.share) {
                    try {
                      await navigator.share({
                        title: "NBA Duo",
                        text: shareText,
                        url: gameUrl
                      });
                    } catch (error) {
                      try {
                        const fullText = `${shareText}
${gameUrl}`;
                        await navigator.clipboard.writeText(fullText);
                        alert("Game results copied to clipboard! 📋");
                      } catch (clipboardError) {
                        const fullText = `${shareText}
${gameUrl}`;
                        alert(`Share this:

${fullText}`);
                      }
                    }
                  } else {
                    try {
                      const fullText = `${shareText}
${gameUrl}`;
                      await navigator.clipboard.writeText(fullText);
                      alert("Game results copied to clipboard! 📋");
                    } catch (error) {
                      const fullText = `${shareText}
${gameUrl}`;
                      alert(`Share this:

${fullText}`);
                    }
                  }
                },
                className: "px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all transform hover:scale-105 shadow-lg flex items-center gap-2",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Share2, { className: "w-4 h-4" }),
                  "Share"
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                onClick: () => {
                  trackCTAClick("archive", "game_bottom_results_guest", false);
                  setShowArchive(true);
                },
                className: "px-4 py-2 bg-gradient-to-r from-gray-800 to-black text-white font-semibold rounded-lg hover:from-gray-700 hover:to-gray-900 transition-all transform hover:scale-105 shadow-lg flex items-center gap-2",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Archive, { className: "w-4 h-4" }),
                  "Play Archive"
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                onClick: () => {
                  trackCTAClick("login", "game_bottom_results_guest", false);
                  onShowLogin();
                },
                className: "px-4 py-2 bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold rounded-lg hover:from-green-600 hover:to-green-700 transition-all transform hover:scale-105 shadow-lg flex items-center gap-2",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(LogIn, { className: "w-4 h-4" }),
                  "Login to See your Rank"
                ]
              }
            )
          ] })
        ] })
      ] }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(RulesModal, { isOpen: showRules, onClose: () => setShowRules(false) }),
      showArchive && /* @__PURE__ */ jsxRuntimeExports.jsx(
        ArchivePopup,
        {
          onClose: () => setShowArchive(false),
          onSelectDate: (date) => {
            onPlayArchive(date);
            setShowArchive(false);
          },
          availablePuzzles,
          userId
        }
      )
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-1 sm:px-4 py-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6 max-w-md lg:max-w-sm mx-auto", children: [
      dailyPuzzleData && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-xl shadow-lg p-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold text-gray-800", children: currentPuzzleDate === (/* @__PURE__ */ new Date()).toLocaleDateString("en-CA") ? "Today's Puzzle" : `Archive: ${new Date(currentPuzzleDate).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric"
            })}` }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600", children: "Fill the grid with 🥅 and 🏒" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              onClick: () => {
                trackRuleView();
                setShowRules(true);
              },
              className: "flex items-center gap-1 px-3 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors text-sm font-medium shadow-sm",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(HelpCircle, { className: "w-4 h-4" }),
                "Rules"
              ]
            }
          )
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          GameGrid,
          {
            grid: gameState.grid,
            constraints: gameState.constraints,
            violations,
            onCellClick,
            showWinAnimation
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          GameControls,
          {
            onUndo: undoMove,
            onHint,
            onNewGame: onReset,
            canUndo,
            isGameComplete: isComplete
          }
        ) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        GameStatus,
        {
          violations,
          violationMessages,
          isComplete,
          gameStats
        }
      ),
      showBottomResults && gameStats && isLoggedIn && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-xl shadow-lg p-6", "data-bottom-results": true, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold text-gray-800 mb-2", children: "🎉 Puzzle Completed!" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600", children: "Great job solving today's challenge!" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3 mb-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center p-3 bg-blue-50 rounded-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-gray-700", children: "Moves" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl font-bold text-blue-600", children: gameStats.moves })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center p-3 bg-yellow-50 rounded-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-gray-700", children: "Hints Used" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl font-bold text-yellow-600", children: gameStats.hintsUsed })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center p-3 bg-green-50 rounded-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-left", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-gray-700", children: "Time" }),
              gameStats.hintsUsed > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-gray-400 mt-1", children: "+15s per hint" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-right", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-bold text-green-600", children: gameStats.totalTime ? (() => {
                const seconds = Math.floor(gameStats.totalTime / 1e3);
                const minutes = Math.floor(seconds / 60);
                const remainingSeconds = seconds % 60;
                return minutes > 0 ? `${minutes}m ${remainingSeconds}s` : `${remainingSeconds}s`;
              })() : "0s" }),
              gameStats.hintsUsed > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-gray-500 mt-1", children: (() => {
                const baseTime = gameStats.totalTime - gameStats.hintsUsed * 15 * 1e3;
                const seconds = Math.floor(baseTime / 1e3);
                const minutes = Math.floor(seconds / 60);
                const remainingSeconds = seconds % 60;
                const baseTimeFormatted = minutes > 0 ? `${minutes}m ${remainingSeconds}s` : `${remainingSeconds}s`;
                return `${baseTimeFormatted} + ${gameStats.hintsUsed}×15s`;
              })() })
            ] })
          ] }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-3 justify-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              onClick: async () => {
                trackCTAClick("share", "game_bottom_results_logged_in", true);
                const timeTaken = gameStats.totalTime ? (() => {
                  const seconds = Math.floor(gameStats.totalTime / 1e3);
                  const minutes = Math.floor(seconds / 60);
                  const remainingSeconds = seconds % 60;
                  return minutes > 0 ? `${minutes}m ${remainingSeconds}s` : `${remainingSeconds}s`;
                })() : "0s";
                const shareText = `🏀 Just solved today's NBA Duo in ${timeTaken}! 🏀

⚡ ${gameStats.moves} moves
💡 ${gameStats.hintsUsed} hints used

Can you beat my time? Play now:`;
                const gameUrl = window.location.href;
                if (navigator.share) {
                  try {
                    await navigator.share({
                      title: "NBA Duo",
                      text: shareText,
                      url: gameUrl
                    });
                  } catch (error) {
                    try {
                      const fullText = `${shareText}
${gameUrl}`;
                      await navigator.clipboard.writeText(fullText);
                      alert("Game results copied to clipboard! 📋");
                    } catch (clipboardError) {
                      const fullText = `${shareText}
${gameUrl}`;
                      alert(`Share this:

${fullText}`);
                    }
                  }
                } else {
                  try {
                    const fullText = `${shareText}
${gameUrl}`;
                    await navigator.clipboard.writeText(fullText);
                    alert("Game results copied to clipboard! 📋");
                  } catch (error) {
                    const fullText = `${shareText}
${gameUrl}`;
                    alert(`Share this:

${fullText}`);
                  }
                }
              },
              className: "px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all transform hover:scale-105 shadow-lg flex items-center gap-2",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Share2, { className: "w-4 h-4" }),
                "Share"
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              onClick: () => {
                trackCTAClick("archive", "game_bottom_results_logged_in", true);
                setShowArchive(true);
              },
              className: "px-4 py-2 bg-gradient-to-r from-gray-800 to-black text-white font-semibold rounded-lg hover:from-gray-700 hover:to-gray-900 transition-all transform hover:scale-105 shadow-lg flex items-center gap-2",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Archive, { className: "w-4 h-4" }),
                "Play Archive"
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              onClick: () => {
                trackCTAClick("leaderboard", "game_bottom_results_logged_in", true);
                window.dispatchEvent(new CustomEvent("switchToLeaderboard"));
              },
              className: "px-4 py-2 bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold rounded-lg hover:from-green-600 hover:to-green-700 transition-all transform hover:scale-105 shadow-lg flex items-center gap-2",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Trophy, { className: "w-4 h-4" }),
                "View Leaderboard"
              ]
            }
          )
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(RulesModal, { isOpen: showRules, onClose: () => setShowRules(false) }),
    showArchive && /* @__PURE__ */ jsxRuntimeExports.jsx(
      ArchivePopup,
      {
        onClose: () => setShowArchive(false),
        onSelectDate: (date) => {
          onPlayArchive(date);
          setShowArchive(false);
        },
        availablePuzzles,
        userId
      }
    )
  ] });
};
const PFSNFooter = ({ currentPage = "NHL" }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { className: "pfsn-footer", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pfsn-footer-container", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "footer-columns", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "footer-column", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "footer-column-title", children: "News & Analysis" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "footer-links", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: currentPage === "CBB" ? "current-page" : "", children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://www.profootballnetwork.com/mens-cbb/", target: "_blank", rel: "noopener noreferrer", children: "CBB" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: currentPage === "CFB" ? "current-page" : "", children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://www.profootballnetwork.com/cfb/", target: "_blank", rel: "noopener noreferrer", children: "CFB" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: currentPage === "Fantasy" ? "current-page" : "", children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://www.profootballnetwork.com/fantasy-football/", target: "_blank", rel: "noopener noreferrer", children: "Fantasy" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: currentPage === "MLB" ? "current-page" : "", children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://www.profootballnetwork.com/mlb/", target: "_blank", rel: "noopener noreferrer", children: "MLB" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: currentPage === "NASCAR" ? "current-page" : "", children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://www.profootballnetwork.com/nascar/", target: "_blank", rel: "noopener noreferrer", children: "NASCAR" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: currentPage === "NBA" ? "current-page" : "", children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://www.profootballnetwork.com/nba/", target: "_blank", rel: "noopener noreferrer", children: "NBA" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: currentPage === "NFL" ? "current-page" : "", children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://www.profootballnetwork.com/nfl/", target: "_blank", rel: "noopener noreferrer", children: "NFL" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: currentPage === "NHL" ? "current-page" : "", children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://www.profootballnetwork.com/nhl/", target: "_blank", rel: "noopener noreferrer", children: "NHL" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: currentPage === "Tennis" ? "current-page" : "", children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://www.profootballnetwork.com/tennis/", target: "_blank", rel: "noopener noreferrer", children: "Tennis" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: currentPage === "WNBA" ? "current-page" : "", children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://www.profootballnetwork.com/wnba/", target: "_blank", rel: "noopener noreferrer", children: "WNBA" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: currentPage === "WWE" ? "current-page" : "", children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://www.profootballnetwork.com/wwe-player-guessing-game/", target: "_blank", rel: "noopener noreferrer", children: "WWE" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "footer-column", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "footer-column-title", children: "NHL Tools & Games" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "footer-links", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/", children: "NHL Card Matching Game" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://www.profootballnetwork.com/nhl-player-guessing-game/", children: "NHL Player Guessing Game" }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "footer-column-title footer-subheading", children: "NFL Tools" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "footer-links", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://www.profootballnetwork.com/mockdraft", children: "NFL Mock Draft Simulator" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://www.profootballnetwork.com/nfl-playoff-predictor", children: "NFL Season & Playoff Predictor" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://www.profootballnetwork.com/nfl-offseason-salary-cap-free-agency-manager", children: "NFL Offseason Manager" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://www.profootballnetwork.com/cta-big-board-builder-nfl-draft/", children: "NFL Draft Big Board Builder" }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "footer-column-title footer-subheading", children: "NFL Games" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "footer-links", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://interactive-tango-pu-7of9.bolt.host/", children: "NFL Duo" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://www.profootballnetwork.com/nfl-player-guessing-game/", children: "NFL Player Guessing Game" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://www.profootballnetwork.com/cta-guess-nfl-prospects-tools/", children: "NFL Draft Guessing Game" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://www.profootballnetwork.com/nfl-word-fumble-cta/", children: "NFL Word Fumble" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "footer-column", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "footer-column-title", children: "Fantasy Football Tools" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "footer-links", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://www.profootballnetwork.com/fantasy-football-mock-draft-simulator/", children: "Fantasy Mock Draft Simulator" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://www.profootballnetwork.com/who-should-i-start-fantasy-optimizer", children: "Fantasy Start/Sit Optimizer" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://www.profootballnetwork.com/fantasy-football-waiver-wire", children: "Fantasy Waiver Wire Assistant" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://www.profootballnetwork.com/fantasy-football-trade-analyzer", children: "Fantasy Trade Analyzer" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://www.profootballnetwork.com/dynasty-fantasy-football-trade-value-charts", children: "Dynasty Trade Charts" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://www.profootballnetwork.com/fantasy-football-trade-value-charts", children: "Redraft Trade Charts" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://www.profootballnetwork.com/nfl-dfs-optimizer-lineup-generator", children: "NFL DFS Optimizer" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://www.profootballnetwork.com/who-should-i-draft-fantasy-football", children: "Who Should I Draft?" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://www.profootballnetwork.com/fantasy-football-team-name-generator", children: "Team Name Generator" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://www.profootballnetwork.com/fantasy-football-draft-order-generator-randomizer/", children: "Draft Order Randomizer" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "footer-column", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "footer-column-title", children: "Betting Tools" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "footer-links", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://www.profootballnetwork.com/betting-odds-calculator-cta/", children: "Odds Calculator" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://www.profootballnetwork.com/parlay-calculator-cta/", children: "Parlay Calculator" }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "footer-column-title footer-subheading", children: "Company" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "footer-links", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://www.profootballnetwork.com/about-us/", children: "About PFSN" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://www.profootballnetwork.com/contact-media-inquiries-pro-football-network/", children: "Contact Us" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://www.profootballnetwork.com/privacy-policy/", children: "Privacy Policy" }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "footer-column-title footer-subheading", children: "NHL Resources" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "footer-links", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://www.profootballnetwork.com/nhl", children: "NHL News" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://www.profootballnetwork.com/nhl/standings", children: "NHL Standings" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://www.profootballnetwork.com/nhl/stats", children: "NHL Stats" }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "footer-column-title footer-subheading", children: "NBA Tools" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "footer-links", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://www.profootballnetwork.com/nhl-mock-draft-simulator", children: "NHL Mock Draft Simulator" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://www.profootballnetwork.com/nhl-player-guessing-game", children: "NHL Player Guessing Game" }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "footer-column-title footer-subheading", children: "NHL Games" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "footer-links", children: /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "current-page", children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/", children: "NHL Duo" }) }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "footer-bottom", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "social-icons", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://facebook.com/PFSN365", "aria-label": "Facebook", rel: "noopener noreferrer", target: "_blank", children: /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fab fa-facebook-f" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "mailto:contact@profootballnetwork.com", "aria-label": "Email", children: /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fas fa-envelope" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/rss", "aria-label": "RSS Feed", children: /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fas fa-rss" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://x.com/PFSN365", "aria-label": "Twitter", rel: "noopener noreferrer", target: "_blank", children: /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fab fa-twitter" }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "copyright", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Copyright © 2019-2025. PFSN." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "All Rights Reserved." })
      ] })
    ] })
  ] }) });
};
function SEOHead({
  title = "NHL Duo - Daily Hockey Grid Game",
  description = "NHL Duo is a fun, brain-teasing puzzle where you fill the grid by following logical rules. It's perfect for NHL fans who love a good challenge!",
  image = "https://www.profootballnetwork.com/games/nhl-duo/nhl-duo-og-image.png",
  url = typeof window !== "undefined" ? window.location.href : "https://www.profootballnetwork.com/games/nhl-duo/",
  type = "website",
  siteName = "Pro Football Network",
  twitterCard = "summary_large_image",
  twitterSite = "@PFSN365",
  keywords = "NHL game, NHL daily challenge, hockey puzzle, NHL grid game, daily NHL game",
  author = "PFSN",
  canonical
}) {
  reactExports.useEffect(() => {
    document.title = title;
    document.documentElement.lang = "en-US";
    const updateMetaTag = (property, content, isProperty = false) => {
      const attribute = isProperty ? "property" : "name";
      let element = document.querySelector(`meta[${attribute}="${property}"]`);
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attribute, property);
        document.head.appendChild(element);
      }
      element.setAttribute("content", content);
    };
    updateMetaTag("description", description);
    updateMetaTag("keywords", keywords);
    updateMetaTag("author", author);
    updateMetaTag("robots", "index, follow, max-image-preview:large");
    updateMetaTag("language", "English");
    updateMetaTag("revisit-after", "1 day");
    updateMetaTag("og:title", title, true);
    updateMetaTag("og:description", description, true);
    const currentUrl = typeof window !== "undefined" ? window.location.href : url;
    updateMetaTag("og:image", image.startsWith("http") ? image : `https://www.profootballnetwork.com/games/nhl-duo${image}`, true);
    updateMetaTag("og:url", currentUrl, true);
    updateMetaTag("og:type", type, true);
    updateMetaTag("og:site_name", siteName, true);
    updateMetaTag("og:locale", "en_US", true);
    updateMetaTag("twitter:card", twitterCard);
    updateMetaTag("twitter:title", title);
    updateMetaTag("twitter:description", description);
    updateMetaTag("twitter:image", image.startsWith("http") ? image : `https://www.profootballnetwork.com/games/nhl-duo${image}`);
    updateMetaTag("twitter:site", twitterSite);
    updateMetaTag("twitter:creator", twitterSite);
    const canonicalUrl = canonical || (typeof window !== "undefined" ? window.location.href : url);
    if (canonicalUrl) {
      let link = document.querySelector('link[rel="canonical"]');
      if (!link) {
        link = document.createElement("link");
        link.setAttribute("rel", "canonical");
        document.head.appendChild(link);
      }
      link.setAttribute("href", canonicalUrl);
    }
    const structuredData = {
      "@context": "https://schema.org",
      "@graph": [
        // WebApplication/Game schema
        {
          "@type": "WebApplication",
          "@id": currentUrl + "#game",
          "name": title,
          "url": currentUrl,
          "description": description,
          "applicationCategory": "Game",
          "genre": "Sports",
          "browserRequirements": "Requires JavaScript. Requires HTML5.",
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD"
          },
          "publisher": {
            "@id": "https://www.profootballnetwork.com/#organization"
          }
        },
        // WebPage schema
        {
          "@type": "WebPage",
          "@id": currentUrl + "#webpage",
          "url": currentUrl,
          "name": title,
          "description": description,
          "isPartOf": {
            "@id": "https://www.profootballnetwork.com/#website"
          },
          "about": {
            "@id": currentUrl + "#game"
          },
          "publisher": {
            "@id": "https://www.profootballnetwork.com/#organization"
          },
          "inLanguage": "en-US"
        },
        // NewsMediaOrganization schema
        {
          "@type": "NewsMediaOrganization",
          "@id": "https://www.profootballnetwork.com/#organization",
          "name": "Pro Football Network",
          "url": "https://www.profootballnetwork.com",
          "logo": {
            "@type": "ImageObject",
            "url": "https://www.profootballnetwork.com/logo.png"
          },
          "sameAs": [
            "https://twitter.com/PFSN365",
            "https://www.facebook.com/ProFootballNetwork",
            "https://www.instagram.com/profootballnetwork",
            "https://www.youtube.com/profootballnetwork"
          ]
        },
        // SiteNavigationElement schema
        {
          "@type": "SiteNavigationElement",
          "name": "Games",
          "url": "https://www.profootballnetwork.com/games/",
          "position": 1
        },
        {
          "@type": "SiteNavigationElement",
          "name": "NHL Duo",
          "url": currentUrl,
          "position": 2
        }
      ]
    };
    let scriptTag = document.querySelector('script[type="application/ld+json"]');
    if (!scriptTag) {
      scriptTag = document.createElement("script");
      scriptTag.setAttribute("type", "application/ld+json");
      document.head.appendChild(scriptTag);
    }
    scriptTag.textContent = JSON.stringify(structuredData);
  }, [title, description, image, url, type, siteName, twitterCard, twitterSite, keywords, author, canonical]);
  return null;
}
const RaptiveOutstreamAd = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "raptive-pfn-outstream" });
};
const RaptiveSidebarAd = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "raptive-pfn-sticky-sidebar" });
};
const RaptiveFooterAd = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "raptive-pfn-disable-footer-close" });
};
const LeaderboardTab = reactExports.lazy(() => __vitePreload(() => import("./LeaderboardTab-B3yOThpW.js"), true ? __vite__mapDeps([0,1,2,3]) : void 0).then((module) => ({ default: module.LeaderboardTab })));
const DashboardTab = reactExports.lazy(() => __vitePreload(() => import("./DashboardTab-B-t7cCvY.js"), true ? __vite__mapDeps([4,1,2,3]) : void 0));
const CompletionScreen = reactExports.lazy(() => __vitePreload(() => import("./CompletionScreen-1IYF7fnv.js"), true ? __vite__mapDeps([5,1,2,3]) : void 0));
const AuthModal = reactExports.lazy(() => __vitePreload(() => import("./AuthModal-CRgIlNXA.js"), true ? __vite__mapDeps([6,1,2,3]) : void 0));
function App() {
  const { user, loading: authLoading, logout } = useAuth();
  const [activeTab, setActiveTab] = reactExports.useState("game");
  const [dailyPuzzleData, setDailyPuzzleData] = reactExports.useState(null);
  const [puzzleLoading, setPuzzleLoading] = reactExports.useState(true);
  const [currentPuzzleDate, setCurrentPuzzleDate] = reactExports.useState("");
  const [puzzleLoadErrorMessage, setPuzzleLoadErrorMessage] = reactExports.useState("");
  const [availablePuzzles, setAvailablePuzzles] = reactExports.useState([]);
  const [showAuthModal, setShowAuthModal] = reactExports.useState(false);
  const [showCompletionScreen, setShowCompletionScreen] = reactExports.useState(false);
  const [showBottomResults, setShowBottomResults] = reactExports.useState(false);
  const [completionModalDismissed, setCompletionModalDismissed] = reactExports.useState(false);
  const [scoreSubmitted, setScoreSubmitted] = reactExports.useState(false);
  const submissionInProgress = reactExports.useRef(false);
  const [previousTab, setPreviousTab] = reactExports.useState("game");
  const {
    currentLeaderboard,
    currentPuzzleDate: leaderboardDate,
    loading: leaderboardLoading,
    error: leaderboardError,
    submitScore,
    getUserRank: getUserRankAsync,
    fetchLeaderboardForDate
  } = useLeaderboard();
  reactExports.useEffect(() => {
    const loadDailyPuzzle = async () => {
      try {
        setPuzzleLoading(true);
        setPuzzleLoadErrorMessage("");
        const puzzle = await fetchDailyPuzzle();
        if (puzzle) {
          setDailyPuzzleData(puzzle);
          setCurrentPuzzleDate(puzzle.date);
          trackPuzzleLoad(true, "daily");
          trackGameStart("daily", puzzle.difficulty);
        } else {
          setPuzzleLoadErrorMessage("No valid puzzle found for today. The puzzle data may be malformed or missing.");
          trackPuzzleLoad(false, "daily", "No puzzle found for today");
        }
      } catch (error) {
        console.error("Failed to load daily puzzle:", error);
        setPuzzleLoadErrorMessage(`Failed to load today's puzzle: ${error.message}`);
        trackPuzzleLoad(false, "daily", error.message);
      } finally {
        setPuzzleLoading(false);
      }
    };
    loadDailyPuzzle();
  }, []);
  reactExports.useEffect(() => {
    const loadAvailablePuzzles = async () => {
      try {
        const puzzles = await fetchAllAvailablePuzzles();
        setAvailablePuzzles(puzzles);
      } catch (error) {
        console.error("Failed to load available puzzles:", error);
      }
    };
    loadAvailablePuzzles();
  }, []);
  const {
    gameState,
    gameStats,
    violations,
    violationMessages,
    isComplete,
    showWinAnimation,
    canUndo,
    undoMove,
    useHint,
    resetGame,
    makeMove
  } = useGameState(dailyPuzzleData);
  React.useEffect(
    () => {
      console.log("🎮 APP - canUndo from hook:", canUndo);
    }
  );
  reactExports.useEffect(() => {
    if (isComplete && !showCompletionScreen && !completionModalDismissed) {
      const timer = setTimeout(() => {
        setShowCompletionScreen(true);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [isComplete, showCompletionScreen, completionModalDismissed]);
  reactExports.useEffect(() => {
  }, [isComplete]);
  reactExports.useEffect(() => {
    var _a;
    if (isComplete && gameStats && !scoreSubmitted && user && gameStats.endTime && !submissionInProgress.current) {
      setScoreSubmitted(true);
      const finalStats = {
        ...gameStats,
        endTime: gameStats.endTime || Date.now(),
        baseTime: gameStats.baseTime || Date.now() - gameStats.startTime
      };
      trackGameEnd({
        moves: finalStats.moves,
        hintsUsed: finalStats.hintsUsed,
        timeTaken: finalStats.totalTime,
        completed: true
      });
      const displayName = user.displayName || ((_a = user.email) == null ? void 0 : _a.split("@")[0]) || "Anonymous";
      submitScore(user.uid, displayName, finalStats, currentPuzzleDate).then(() => {
        trackScoreSubmission(true, finalStats, currentPuzzleDate);
      }).catch((error) => {
        trackScoreSubmission(false, finalStats, currentPuzzleDate);
      });
    }
  }, [isComplete, scoreSubmitted, user == null ? void 0 : user.uid, gameStats == null ? void 0 : gameStats.endTime, currentPuzzleDate]);
  reactExports.useEffect(() => {
    if (!isComplete) {
      setScoreSubmitted(false);
      submissionInProgress.current = false;
      setShowCompletionScreen(false);
      setShowBottomResults(false);
      setCompletionModalDismissed(false);
    }
  }, [isComplete]);
  const handleCellClick = (row, col) => {
    var _a, _b;
    if (((_b = (_a = gameState.grid[row]) == null ? void 0 : _a[col]) == null ? void 0 : _b.isFixed) || isComplete) return;
    const currentValue = gameState.grid[row][col].value;
    const nextValue = currentValue === null ? "helmet" : currentValue === "helmet" ? "football" : null;
    trackCellClick(row, col, nextValue, gameStats.moves + 1);
    makeMove(row, col);
  };
  const handleHint = () => {
    trackHint(gameStats.hintsUsed + 1);
    useHint();
  };
  const handleReset = () => {
    trackReset(gameStats.moves, gameStats.hintsUsed);
    setShowBottomResults(false);
    setCompletionModalDismissed(false);
    resetGame();
  };
  const handleCloseCompletionModal = () => {
    setShowCompletionScreen(false);
    setCompletionModalDismissed(true);
    setShowBottomResults(true);
    setTimeout(() => {
      const bottomResults = document.querySelector("[data-bottom-results]");
      if (bottomResults) {
        bottomResults.scrollIntoView({
          behavior: "smooth",
          block: "center"
        });
      } else {
        window.scrollTo({
          top: document.body.scrollHeight,
          behavior: "smooth"
        });
      }
    }, 100);
  };
  const handleShowLeaderboard = () => {
    trackTabSwitch(activeTab, "leaderboard");
    setActiveTab("leaderboard");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const handleTabChange = (newTab) => {
    trackTabSwitch(activeTab, newTab);
    setPreviousTab(activeTab);
    setActiveTab(newTab);
    if (newTab !== "game") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };
  const handlePlayArchive = async (date) => {
    try {
      setPuzzleLoading(true);
      setPuzzleLoadErrorMessage("");
      const puzzle = await fetchPuzzleByDate(date);
      if (puzzle) {
        setDailyPuzzleData(puzzle);
        setCurrentPuzzleDate(puzzle.date);
        trackGameStart("daily", puzzle.difficulty);
        setActiveTab("game");
      } else {
        setPuzzleLoadErrorMessage(`No valid puzzle found for ${date}. The puzzle data may be malformed or missing.`);
      }
    } catch (error) {
      setPuzzleLoadErrorMessage(`Failed to load puzzle for ${date}: ${error.message}`);
    } finally {
      setPuzzleLoading(false);
    }
  };
  reactExports.useEffect(() => {
    const handleSwitchToLeaderboard = () => {
      setActiveTab("leaderboard");
    };
    window.addEventListener("switchToLeaderboard", handleSwitchToLeaderboard);
    return () => window.removeEventListener("switchToLeaderboard", handleSwitchToLeaderboard);
  }, []);
  if (authLoading || puzzleLoading) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto mb-4" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600", children: "Loading..." })
    ] }) });
  }
  if (!dailyPuzzleData && activeTab === "game") {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        TopBar,
        {
          user,
          activeTab,
          onTabChange: handleTabChange,
          onShowLogin: () => setShowAuthModal(true),
          onLogout: logout
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4 py-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold text-gray-800 mb-4", children: "No Puzzle Available" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 mb-6", children: puzzleLoadErrorMessage || "There's no puzzle available for today. Please check back later!" })
      ] }) }),
      showAuthModal && /* @__PURE__ */ jsxRuntimeExports.jsx(AuthModal, { onClose: () => setShowAuthModal(false) })
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SEOHead, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(PFSNHeader, { currentPage: "NHL" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      TopBar,
      {
        user,
        activeTab,
        onTabChange: setActiveTab,
        onShowLogin: () => setShowAuthModal(true),
        onLogout: logout
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-2 sm:px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col lg:flex-row gap-0 justify-center items-start", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 max-w-xl px-1 sm:px-0", children: [
        activeTab === "game" && /* @__PURE__ */ jsxRuntimeExports.jsx(
          GameTab,
          {
            dailyPuzzleData,
            gameState,
            gameStats,
            violations,
            violationMessages,
            isComplete,
            showWinAnimation,
            onCellClick: handleCellClick,
            onHint: handleHint,
            onReset: handleReset,
            canUndo,
            undoMove,
            onPlayArchive: handlePlayArchive,
            availablePuzzles,
            isLoggedIn: !!user,
            userId: user == null ? void 0 : user.uid,
            currentPuzzleDate,
            onShowLogin: () => setShowAuthModal(true),
            showBottomResults,
            onCloseBottomResults: () => setShowBottomResults(false)
          }
        ),
        activeTab === "leaderboard" && /* @__PURE__ */ jsxRuntimeExports.jsx(reactExports.Suspense, { fallback: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center p-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "loading-skeleton", children: "Loading..." }) }), children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          LeaderboardTab,
          {
            currentLeaderboard,
            currentPuzzleDate: currentPuzzleDate || (dailyPuzzleData == null ? void 0 : dailyPuzzleData.date),
            loading: leaderboardLoading,
            error: leaderboardError,
            userId: user == null ? void 0 : user.uid,
            isLoggedIn: !!user,
            onShowLogin: () => setShowAuthModal(true),
            onFetchLeaderboard: fetchLeaderboardForDate,
            onGetUserRank: getUserRankAsync
          }
        ) }),
        activeTab === "dashboard" && /* @__PURE__ */ jsxRuntimeExports.jsx(reactExports.Suspense, { fallback: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center p-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "loading-skeleton", children: "Loading..." }) }), children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          DashboardTab,
          {
            isLoggedIn: !!user,
            userId: user == null ? void 0 : user.uid,
            onShowLogin: () => setShowAuthModal(true),
            onPlayArchive: handlePlayArchive,
            availablePuzzles
          }
        ) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden lg:block lg:w-[300px] lg:ml-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "sticky top-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(RaptiveSidebarAd, {}) }) })
    ] }) }),
    showCompletionScreen && activeTab === "game" && /* @__PURE__ */ jsxRuntimeExports.jsx(reactExports.Suspense, { fallback: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "loading-skeleton", children: "Loading..." }) }), children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      CompletionScreen,
      {
        gameStats,
        onPlayArchive: handlePlayArchive,
        availablePuzzles,
        isLoggedIn: !!user,
        onShowLogin: () => setShowAuthModal(true),
        onShowLeaderboard: handleShowLeaderboard,
        userId: user == null ? void 0 : user.uid,
        onClose: handleCloseCompletionModal
      }
    ) }),
    showAuthModal && /* @__PURE__ */ jsxRuntimeExports.jsx(reactExports.Suspense, { fallback: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "loading-skeleton", children: "Loading..." }) }), children: /* @__PURE__ */ jsxRuntimeExports.jsx(AuthModal, { onClose: () => setShowAuthModal(false) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(RaptiveOutstreamAd, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(RaptiveFooterAd, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(PFSNFooter, { currentPage: "NBA" })
  ] });
}
createRoot(document.getElementById("root")).render(
  /* @__PURE__ */ jsxRuntimeExports.jsx(reactExports.StrictMode, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(App, {}) })
);
export {
  ArchivePopup as A,
  HINT_PENALTY_SECONDS as H,
  trackCTAClick as a,
  trackLeaderboardRankView as b,
  trackDashboardView as c,
  trackPendingGamesClick as d,
  trackUserStatsView as e,
  trackCompletionScreenView as f,
  trackCompletionScreenAction as g,
  trackShare as h,
  useAuth as i,
  trackLeaderboardView as t,
  useLeaderboard as u
};
